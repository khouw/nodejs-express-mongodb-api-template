# NodeJS Express-MongoDB API Template
## A simple API Template for NodeJS

This template is designed for easy development of NodeJS API based on Express Framework and MongoDB database connection.

## Requirements and Installation
To use this, you must have:
* [NodeJS](https://nodejs.dev/learn/how-to-install-nodejs) installed
* [MongoDB](https://docs.mongodb.com/manual/installation/) installed and running
* [npm](https://www.npmjs.com/) package manager installed

To start this example run commands listed below.
Clone the repository from github.com to your workspace folder:
```sh
$ git clone git@github.com:khouw/nodejs-express-mongodb-api-template.git
```
Navigate to the repository folder:
```sh
$ cd nodejs-express-mongodb-api-template
```
Install dependencies
```sh
npm install
```

## Workspace
Your workspace should look like this:
```sh
nodejs-express-mongodb-api-template/
    config/
        database.js         # script for database configuration
    controllers/
        userController.js   # sample for controller
    models/
        index.js            # main model Schema
        userModel.js        # sample for model
    routes/
        index.js            # main route
        users.js            # sample for route
    app.js                  # main js file
    package.json            # project settings
    README.md
    .gitignore

```

## Configurations
There are several configuration files to fit with your environments.
* Database configuration file is located on ```config/database.js```
* Server port configuration is located on  ```app.js```