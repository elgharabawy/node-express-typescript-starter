[![Build - Tests](https://github.com/elgharabawy/node-express-typescript-starter/actions/workflows/build-test.yml/badge.svg)](https://github.com/elgharabawy/node-express-typescript-starter/actions/workflows/build-test.yml)
# node-express-typescript-starter
This is a starter Node.js API server project built on Express. It has Docker support as well as Jest, ESLint, and a local development server. Everything is in Typescript.

This was initially built for a Google Cloud Run project, but it could be used anywhere. 
## Prerequisite
- Node 16
## Nice to have
- [NVM](https://github.com/nvm-sh/nvm)
- [VS Code](https://code.visualstudio.com/)
- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
## Getting started
- Clone the repository
```
git clone --depth=1 https://github.com/elgharabawy/node-express-typescript-starter.git <project_name>
```
- Install dependencies
```
cd <project_name>
npm install
```
- Run local development server
```
npm run dev
```
- Using postman, curl, or your browser
```
GET http://localhost:8080
GET http://localhost:8080/articles
GET http://localhost:8080/articles/test
```
- To use ESLint
```
npm run lint
```
- To run tests
```
npm test
```
## ENV variables
The project uses [dotenv](https://github.com/motdotla/dotenv) to parse environment variables. To add environment variables to your project, simply, create a `.env` file in the root folder of the project. You can then reference it using `process.env.VAR_NAME`. For example, to change Node.js mode, simply add `NODE_ENV=production` or `NODE_ENV=development` to your `.env` file to change Node.js mode to production or development accordingly.

Remeber: it's not a good idea to push .env files to your repo!
## Logging
This project uses [Winston](https://github.com/winstonjs/winston) and [Morgan](https://github.com/expressjs/morgan) for logging. Winston is exported as a logger and can be used to log custom messages on demand. Also, it can be extended to push logs to files, external database, or any logging service.

Morgan is used as an http logger middleware for Express and the logs are routed through Winston, so everything is nicely bundled in one log stream.

All of these logs are written to console during development. Feel free to add production-specific loggers as and when needed.
## Project structure
```
node-express-typescript-starter
├─ .editorconfig
├─ .eslintrc.json
├─ .github
│  └─ workflows
│     └─ build-test.yml
├─ .gitignore
├─ .nvmrc
├─ CODE_OF_CONDUCT.md
├─ CONTRIBUTING.md
├─ Dockerfile
├─ LICENSE
├─ README.md
├─ error.log
├─ jest.config.ts
├─ package-lock.json
├─ package.json
├─ src
│  ├─ common
│  │  ├─ http-exception.ts
│  │  └─ logger.ts
│  ├─ controllers
│  │  └─ articles.controller.ts
│  ├─ index.ts
│  ├─ middleware
│  │  ├─ error.middleware.ts
│  │  ├─ http-logger.middleware.ts
│  │  ├─ index.ts
│  │  └─ not-found.middleware.ts
│  ├─ routers
│  │  └─ articles.router.ts
│  └─ services
│     └─ articles.service.ts
├─ tests
│  └─ articles.test.ts
├─ tsconfig.json
└─ types
   ├─ articles.d.ts
   └─ service-response.d.ts

```
## General notes
- This is meant to be a starter project. Feel free to remove the articles routes and add your own resources
- ESLint is run as part of the build command 
- This project could be deployed to Google Cloud using [gcloud CLI](https://cloud.google.com/sdk/docs/install) without any modifications
```
gcloud run deploy
```