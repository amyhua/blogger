const CONFIGURATION = {
  'development': {
    'dialect': 'postgres',
    'username': process.env.POSTGRES_USERNAME,
    'password': process.env.POSTGRES_PASSWORD,
    'database': 'blogger_development',
    'jwtSecret': 'blogger_development_MySuperDuperSecret',
    'jwtExpiration': 30 // seconds
  }
};

const env = process.env.NODE_ENV || 'development';

module.exports = CONFIGURATION[env];
