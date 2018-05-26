import Server from "./../../interfaces/http/server";
import MongoDb from "./../database/mongoDb/mongoDb";

class Application {
  private server: Server;
  private database: MongoDb;

  /**
   * @param server
   * @param mongoDb
   */
  constructor(server: Server, mongoDb: MongoDb) {
    this.server = server;
    this.database = mongoDb;
  }

  /**
   * Start the app.
   */
  public async start() {
    await this.database.start();
    await this.server.start();
  }
}

export default Application;
