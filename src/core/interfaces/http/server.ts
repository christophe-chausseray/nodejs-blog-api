import express from "express";
import {Express} from "express";
import {InterfaceConfigOptions} from "../../infrastructure/utils/config";

class Server {
  private config: InterfaceConfigOptions;
  private logger: any;
  private express: any;

  /**
   * @param router
   * @param config
   * @param logger
   */
  constructor(router: any, config: InterfaceConfigOptions, logger: any) {
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
  public start(): Promise<{}> {
    return new Promise((resolve) => {
      const http = this.express.listen(this.config.port, () => {
        this.logger.info(`[p ${process.pid}] Listening at port ${this.config.port}`);
        resolve();
      });
    });
  }
}

export default Server;
