const morgan = require('morgan');
const LoggerStreamAdapter = require('src/core/infrastructure/logging/LoggerStreamAdapter');

module.exports = ({
  logger,
}) => morgan('dev', {
  stream: LoggerStreamAdapter.toStream(logger),
});
