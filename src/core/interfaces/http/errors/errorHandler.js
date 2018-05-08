const HttpStatus = require('http-status');

module.exports = (err, req, res, next) => {
  const {
    logger,
  } = req.container.cradle;

  logger.error(err);

  const response = {
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    message: err.message,
  };

  if (!res.headersSent) {
    res.status(response.statusCode).json(response);
  }
};
