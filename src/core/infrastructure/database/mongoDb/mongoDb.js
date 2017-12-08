const Mongoose = require('mongoose');
const InfrastructureException = require('src/core/infrastructure/exception/infrastructureException');

class MongoDb {
  constructor({ config, logger }) {
    this.config = config;
    this.logger = logger;
    Mongoose.Promise = global.Promise;
  }

  async start() {
    const options = {
      useMongoClient: true,
      user: this.config.mongo.user,
      pass: this.config.mongo.password,
    };

    const mongodbUrl = `mongodb://${this.config.mongo.server}:${this.config.mongo.port}/${this.config.mongo.database}`;

    try {
      await Mongoose.connect(mongodbUrl, options);

      this.logger.info('Connection to MongoDB established');
    } catch (exception) {
      this.logger.error(exception);

      throw InfrastructureException.causedBy('MongoDb authentication has some issues.');
    }
  }
}

module.exports = MongoDb;
