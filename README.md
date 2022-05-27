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
Visit: 
http://localhost:8080
http://localhost:8080/articles
http://localhost:8080/articles/test
```
- To use ESLint
```
npm run lint
```
- To run tests
```
npm test
```
## Project structure
```
node-express-typescript-starter
├─ .eslintrc.json
├─ .github
│  └─ workflows
│     └─ build-test.yml
├─ .gitignore
├─ .nvmrc
├─ Dockerfile
├─ LICENSE
├─ README.md
├─ jest.config.ts
├─ package-lock.json
├─ package.json
├─ src
│  ├─ controllers
│  │  └─ articles.controller.ts
│  ├─ index.ts
│  ├─ routers
│  │  └─ articles.router.ts
│  └─ services
│     └─ articles.service.ts
├─ tests
│  └─ articles.test.ts
├─ tsconfig.json
└─ types
   ├─ articles.d.ts
   └─ serviceResponse.d.ts
```
## General notes
- This is meant to be a starter project. Feel free to remove the articles routes and add your own resources
- ESLint is run as part of the build command 
- This project could be deployed to Google Cloud using [gcloud CLI](https://cloud.google.com/sdk/docs/install) without any modifications
```
gcloud run deploy
```