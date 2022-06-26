<div  align="center">
<img src="https://i.postimg.cc/SNnTh76n/illustration.png" width="300" height="auto">
 </div>
  <div align="center">
  <br />
  <br />
  <a href="https://github.com/dec0dOS/amazing-github-template/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  ·
  <a href="https://github.com/dec0dOS/amazing-github-template/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  .
  <a href="https://github.com/dec0dOS/amazing-github-template/discussions">Ask a Question</a>
</div>

<div align="center">
<br />

[![license](https://img.shields.io/github/license/dec0dOS/amazing-github-template.svg?style=flat-square)](LICENSE)

[![PRs welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/Infinite-Bug)
[![made with hearth by infinite-bug](https://img.shields.io/badge/made%20with%20%E2%99%A5%20by-infinitebug-ff1414.svg?style=flat-square)](https://github.com/hakamfaza)
 </div>

# Introduction
Ankasa-api is an API that allows users to read flight information data from a database. Ankasa-api also allows users to create, update and delete flight information to/from the database.



[![Node.js](https://img.shields.io/badge/Node.js-v.16.14.0-green.svg?style=flat-square&logo=appveyor)](https://nodejs.org/) [![Express.js](https://img.shields.io/badge/Express.js-4.17.3-orange.svg?style=flat-square&logo=appveyor)](https://expressjs.com/en/starter/installing.html) [![PostgreSQL](https://img.shields.io/badge/postgresql-v14.2-blue?style=flat-square&logo=appveyor)](https://www.postgresql.org/) [![body-parser](https://img.shields.io/badge/body--parser-v1.19.2-red?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/body-parser) [![cors](https://img.shields.io/badge/cors-v2.8.5-success?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/cors) [![dotenv](https://img.shields.io/badge/dotenv-v16.0.0-blueviolet?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/dotenv) [![helmet](https://img.shields.io/badge/jsonwebtoken-v5.0.2-blue?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/helmet) [![pg](https://img.shields.io/badge/pg-v8.7.3-success?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/pg) [![xss-clean](https://img.shields.io/badge/xss--clean-v0.1.1-blue?style=flat-square&logo=appveyor)](https://www.npmjs.com/package/xss-clean)

## Requirements

1. [Node Js](https://nodejs.org/en/download/)
2. [Express JS]("https://expressjs.com/en/starter/installing.html")
3. [Postman]("https://www.getpostman.com/")
4.  Web Server (ex. localhost)
5.  Code Editor (VS Code, Sublime, Atom, etc)

## Getting Started


<img src="https://www.javatpoint.com/js/nodejs/images/node-js-tutorial.png" width="200"/>


### Node.js

Node.js is a software that designed to develop web-based applications and is written in the syntax of the JavaScript programming language. JavaScript as a programming language that runs on the client / browser side only can be completed by Node.js. With Node.js, JavaScript can also act as a programming language that runs on the server side, such as PHP, Ruby, Perl, and so on. 

Node.js can run on Windows, Mac OS X and Linux operating systems without the need for program code changes. Node.js has its own HTTP server library that make it possible to run a web server without using a web server program such as Apache or Nginx.


<img src="https://expressjs.com/images/express-facebook-share.png" width="250"/>

### Express.js
Express.js is one of the most popular web frameworks for Node.js. The complete documentation and its use which is quite easy, can make us develop various products such as web applications or RESTful API.


## Installation

1. Clone or download this repository
2. Open app's directory in CMD or Terminal.
3. Type in Terminal `npm install` to install the required packages.
4. Make a new file, **.env** and setup the file. [instruction here](#setup-env-file)
5. Turn on Web Server and PostgreSQL, (Also can be done with third-party tools like XAMPP, WAMP, etc)
6. Setup the database. [instruction here](#setup-database)
7. Open **Postman** desktop application or Chrome web extension (Install **Postman** if you haven't yet)
8. Choose HTTP Method and enter the request URL.(i.e. localhost:4004/recipe)
9. Check all **Endpoints** [here](#endpoints)

## Setup .env file
Open **.env** file on code editor and copy the code below :

```
# app
APP_NAME = [APP_NAME]
NODE_ENV = [NODE_ENV]
PORT = [APPLICATION_PORT]
API_URL = [BACKEND_URL]
CLIENT_URL = [FRONTEND_URL]

# database
DB_HOST = [DB_HOST]
DB_USER = [DB_USER]
DB_PASSWORD = [DB_PASSWORD]
DB_NAME = [DB_NAME]
DB_PORT = [DB_PORT]

# jwt
JWT_SECRET = [JWT_SECRET]

# google
EMAIL_FROM = [EMAIL_FROM]
EMAIL_USER = [EMAIL_USER]
GOOGLE_CLIENT_ID = [GOOGLE_CLIENT_ID]
GOOGLE_CLIENT_SECRET = [GOOGLE_CLIENT_SECRET]
REDIRECT_URI = [REDIRECT_URI]
GMAIL_REFRESH_TOKEN = [GMAIL_REFRESH_TOKEN]

```


## API Reference

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


#### Get all user transactions

```http
  GET /userTransactions
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` | **Required**. Your API key |
| `limit` | `number` | **Required**. Your API key |
| `sortType` | `string` | **Required**. Your API key |
| `page` | `number` | **Required**. Your API key |

#### Get all airlines

```http
  GET /airlines
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `search` | `string` | **Required**. Your API key |
| `limit` | `number` | **Required**. Your API key |
| `sortType` | `string` | **Required**. Your API key |
| `page` | `number` | **Required**. Your API key |
| `sortField` | `string` | **Required**. Your API key |

#### Get all destination

```http
  GET /destination
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `limit` | `number` | **Required**. Your API key |
| `sortType` | `string` | **Required**. Your API key |

### Front End
* Repository: https://github.com/hakamfaza/Front-End-AnkasaApp
* Demo: https://ankasa-flight.netlify.app/

## Our Team

<center>
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/andry-pebrianto">
          <img width="100" src="https://avatars.githubusercontent.com/u/72940944?v=4" alt="Andry Pebrianto"><br/>
          <sub><b>Andry Pebrianto</b></sub> <br/>
          <sub>Project Manager | Full Stack Web Developer</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/hanifudin0597">
          <img width="100" src="https://avatars.githubusercontent.com/u/47863909?v=4" alt="Hanifudin Alfauzi"><br/>
          <sub><b>Hanifudin Alfauzi</b></sub> <br/>
          <sub>Full Stack Web Developer</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/hakamfaza">
          <img width="100" src="https://avatars.githubusercontent.com/u/75160713?v=4" alt="Muhamad Hakam Faza"><br/>
          <sub><b>Muhamad Hakam Faza</b></sub> <br/>
          <sub>Full Stack Web Developer</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/rikakus">
          <img width="100" src="https://avatars.githubusercontent.com/u/59488349?v=4" alt="Ian Pangestu"><br/>
          <sub><b>Ian Pangestu</b></sub> <br/>
          <sub>Full Stack Web Developer</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/bagus25dzikri06">
          <img width="100" src="https://avatars.githubusercontent.com/u/18045292?v=4" alt="Bagus Dzikri Hidayat"><br/>
          <sub><b>Bagus Dzikri Hidayat</b></sub> <br/>
          <sub>Full Stack Web Developer</sub>
        </a>
      </td>
    </tr>
  </table>
</center>

## License
Distributed under the [MIT](/LICENSE) License.

