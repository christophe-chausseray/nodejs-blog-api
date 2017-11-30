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
  logging: {
    appenders,
  },
};
