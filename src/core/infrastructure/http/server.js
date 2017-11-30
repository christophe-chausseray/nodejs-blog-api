const express = require('express');

class Server {
  /**
   * @param router
   * @param config
   * @param logger
   */
  constructor({ router, config, logger }) {
    this.config = config;
    this.logger = logger;
    this.express = express();

    this.express.use(router);
  }

  /**
   * Run the express server.
   *
   * @returns {Promise}
   */
  start() {
    return new Promise(resolve => {
      const http = this.express
        .listen(this.config.port, () => {
          const { port } = http.address();
          this.logger.info(`[p ${process.pid}] Listening at port ${port}`);
          resolve();
        });
    });
  }
}

module.exports = Server;
