const nconf = require('nconf');

nconf.env();

const config = nconf.get();
const logDirectory = 'logs';

const appenders = [
  { type: 'console' },
  { type: 'file', filename: `${logDirectory}/dev.log` },
];

module.exports = {
  env: config.NODE_ENV,
  port: config.API_PORT,
  mongo: {
    database: config.MONGO_DATABASE,
    server: config.MONGO_SERVER,
    port: config.MONGO_PORT,
    user: config.MONGO_USER,
    password: config.MONGO_PASSWORD,
  },
  logging: {
    appenders,
  },
};
