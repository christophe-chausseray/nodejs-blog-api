class Application {
  /**
   * @param server
   * @param mongoDb
   */
  constructor({ server, mongoDb }) {
    this.server = server;
    this.database = mongoDb;
  }

  /**
   * Start the app.
   */
  async start() {
    await this.database.start();
    await this.server.start();
  }

}

module.exports = Application;
