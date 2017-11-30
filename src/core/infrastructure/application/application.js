class Application {
  /**
   * @param server
   */
  constructor({ server }) {
    this.server = server;
  }

  /**
   * Start the app.
   *
   * @returns {Promise}
   */
  start() {
    return Promise.resolve()
      .then(() => this.server.start());
  }
}

module.exports = Application;
