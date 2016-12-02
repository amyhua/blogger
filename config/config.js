const CONFIGURATION = {
  "development": {
    "dialect": "postgres",
    "username": "nycdathree",
    "password": "",
    "database": "blogger_development",
    "jwtSecret": "MySuperDuperSecret",
    "jwtExpiration": 30
  }
};

const env = process.env.NODE_ENV || "development";

module.exports = CONFIGURATION[env]

