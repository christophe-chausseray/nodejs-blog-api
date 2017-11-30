const { Router } = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = (
  {
    loggerMiddleware,
    containerMiddleware,
    errorHandler,
  }) => {
  const router = Router();
  const apiPrefix = '/api/v1';

  router
    .use(cors())
    .use(bodyParser.json())
    .use(containerMiddleware);

  router.use(loggerMiddleware);

  router.use(errorHandler);

  return router;
};
