const CONFIGURATION = {
  "development": {
    "dialect": "postgres",
    "username": process.env.NODE_ENV.POSTGRES_USERNAME,
    "password": process.env.NODE_ENV.POSTGRES_PASSWORD,
    "database": "blogger_development",
    "jwtSecret": "blogger_development_MySuperDuperSecret",
    "jwtExpiration": 30
  }
};

const env = process.env.NODE_ENV || "development";

module.exports = CONFIGURATION[env];
