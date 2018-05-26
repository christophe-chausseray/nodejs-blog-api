import mongoose, {Mongoose} from "mongoose";
import InfrastructureException from "../../exception/infrastructureException";
import {InterfaceConfigOptions} from "../../utils/config";

class MongoDb {
  private config: InterfaceConfigOptions;
  private logger: any;

  constructor(config: InterfaceConfigOptions, logger: any) {
    this.config = config;
    this.logger = logger;
    mongoose.Promise = global.Promise;
  }

  /**
   * Start the mongoose connection
   *
   * @throws InfrastructureException if it has issues with MongoDb connection.
   */
  public async start(): Promise<Mongoose> {
    const options: object = {
      useMongoClient: true,
      user: this.config.mongo.user,
      pass: this.config.mongo.password,
    };

    const mongodbUrl: string = `mongodb://${this.config.mongo.server}:${this.config.mongo.port}/${
      this.config.mongo.database
    }`;

    try {
      this.logger.info("Connection to MongoDB established");

      return await mongoose.connect(mongodbUrl, options);
    } catch (exception) {
      this.logger.error(exception);

      throw InfrastructureException.causedBy("MongoDb authentication has some issues.");
    }
  }
}

export default MongoDb;
