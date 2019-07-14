//define our repos and secrets
const secret = "secret_key_which_is_also_stored_on_github";
const repo = "path/to/local/repo";

const secret1 = "secret_key_which_is_also_stored_on_github1";
const repo1 = "/path/to/local/repo";

//docs: https://nodejs.org/api/http.html
const http = require("http");
//docs: https://nodejs.org/api/crypto.html#crypto_class_hmac
const crypto = require("crypto");
//docs: https://nodejs.org/api/child_process.html
const exec = require("child_process").exec;

http
  .createServer(function(req, res) {
    req.on("data", function(chunk) {
      //get signatures for all repos...note:  each repo must have a unique secret
      let sig =
        "sha1=" +
        crypto
          .createHmac("sha1", secret)
          .update(chunk.toString())
          .digest("hex");
      let sig1 =
        "sha1=" +
        crypto
          .createHmac("sha1", secret1)
          .update(chunk.toString())
          .digest("hex");

      //choose which was updated ... 
      switch (req.headers["x-hub-signature"]) {
        case sig:
          exec("cd " + repo + " && git pull && yarn build"); //execute whatever command you want here 
          break;
        case sig1:
          exec("cd " + repo1 + " && git pull && yarn build");
          break;
      }
    });

    res.end();
  })
  .listen(8080);
