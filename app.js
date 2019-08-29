require("dotenv").config();
const repos = require("./repositories");

//Docs: https://nodejs.org/api/http.html
const http = require("http");
//Docs: https://nodejs.org/api/crypto.html
const crypto = require("crypto");
//Docs: https://nodejs.org/api/child_process.html
const exec = require("child_process").exec;

const PORT = process.env.PORT || 8080;

//Our server
http
  .createServer(function(req, res) {
    let response = "UPDATES: "; //github log response
    let { headers } = req;

    req.on("error", function(error) {
      response += error;
    });

    req.on("data", function(chunk) {
      let remoteSig = headers["x-hub-signature"];

      //choose updated repo
      repos.map(repo => {
        let { secret, path, commands } = repo;
        let currentSig =
          "sha1=" +
          crypto
            .createHmac("sha1", secret)
            .update(chunk.toString())
            .digest("hex");

        if (remoteSig === currentSig) {
          //execute commands
          exec("cd " + path + " && " + commands, (error, stdout, stderr) => {
            if (error) {
              response += `exec error: ${error}`;
              return;
            }
            response += `, stdout: ${stdout}`;
            response += `, stderr: ${stderr}`;
          });
        }
      });
    });
    if (response === "UPDATES: ") response += "Nothing Was Executed...";
    res.write(response);
    console.log(response);
    res.end();
  })
  .listen(PORT, () => console.log(`📡  is live on port ${PORT}`));
