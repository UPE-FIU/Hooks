# 📡Hooks

[![Shellhacks](https://hackathon.badge.pw/shellhacks)](https://shellhacks.net) [![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

A little NodeJS server for managing GitHub events

---

## Getting started

1. Setting up your environment

   - [Set up](https://developer.github.com/webhooks/creating/#setting-up-a-webhook) your Github [Webhooks](https://help.github.com/en/articles/about-webhooks)
   - Create a [`.env`](https://github.com/UPE-FIU/Hooks/blob/master/example.env) file and add your [secret(s)](https://developer.github.com/webhooks/creating/#secret)

2. Add your repo path(s) and command(s) in [repositories.js](https://github.com/UPE-FIU/Hooks/blob/jehf-bug-fix/repositories.js)

3. [Fire it up](https://github.com/UPE-FIU/Hooks/tree/master#available-commands) 🚀

   - Feel free to PR changes or create an issue with any suggestions 😃

## Available Commands

...
<br/>
`yarn start` - Starts PM2 process with argument `--name`</br>
`yarn stop` - Stops process </br>
`yarn restart` - Restarts process </br>
...

For more details see [package.json](https://github.com/UPE-FIU/Hooks/blob/master/package.json)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://upe.cs.fiu.edu"><img src="https://avatars0.githubusercontent.com/u/32716551?v=4" width="50px;" alt="Jehf Denezaire"/><br /><sub><b>Jehf Denezaire</b></sub></a><br /><a href="https://github.com/jehfkemsy/Hooks/commits?author=Jehfkemsy" title="Code">💻</a> <a href="https://github.com/jehfkemsy/Hooks/issues?q=author%3AJehfkemsy" title="Bug reports">🐛</a> <a href="https://github.com/jehfkemsy/Hooks/commits?author=Jehfkemsy" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
