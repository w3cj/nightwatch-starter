# nightwatch Starter

A simple starter project for nightwatch end to end tests.

* No dependency on Java or Selenium.
* Uses chromedriver installed from npm.
* Uses gulp tasks to start a local http server and run e2e tests.

## Getting Started

```sh
yarn
#or
npm install
```

## Start Server

This will start a basic http server on port 8080 serving the src folder. All of your html files should go in the src folder.

```sh
npm start
```

## Run e2e Tests

This will start an http server on port 8080 and run the e2e tests.

```sh
npm test
```

## Add e2e Tests

Add test files to the e2e-tests folder. nightwatch will automatically run them.
