# Fedora Project Clone

Clone of the Fedora project start page (https://start.fedoraproject.org/) using react.

### Original site (click to open site)
[![sample.png](https://i.postimg.cc/T2HrPdTt/sample.png)](https://start.fedoraproject.org/)

### Clone (click to open site)
[![clone.png](https://i.postimg.cc/rzXstYnw/clone.png)](http://www.msdeus.site/171001/fpc/)

# Table of content
1. [Installation](#Installation)
1. [Usage](#Usage)
1. [Tools](#Tools)
1. [License](#License)

## Installation
Clone the git repo:

```
$ git clone https://github.com/val171001/fedoraproject-clone.git
```

Installing requirements:

```
$ yarn install
```
## Usage

### Compiles and hot-reloads for development
```
$ yarn dev
```
Local development server will use port 2048 http://localhost:2048/
### Compiles and minifies for production
```
$ yarn build
```
Command generates /dist folder will be created with the production ready files
### Start new SSR server
```
$ yarn server
```
Command starts server to use the app as SSR (in production mode) on port 2048 http://localhost:2048/
### Compile client site
```
$ yarn client
```
Command compiles client for development app and hotreloads
### Lints and fixes files
```
$ yarn lint
```
Lints and auto fixes the code styling according to the settings set at .eslintrc

## Tools used for the creation of the app
* [React](https://reactjs.org/): JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. Used for the creations of the UI of the site.
* [Babel](https://babeljs.io/): Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Used for code transpilation.
* [Webpack](https://webpack.js.org/): Webpack is an open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules. Used for bundling the app.
* [Eslint](https://eslint.org/): Code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn’t adhere to certain style guidelines. Used for linting and aplying code style.
* [Express](https://expressjs.com/): Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Used to build the server to serve the website as a SSR (server side renderes) app.

## License
Copyright (c) 2019-present Josue Valenzuela

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
