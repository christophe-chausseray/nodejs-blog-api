import mongoose from "mongoose";
/** mongoose-timestamp and mongoose-type-email need to be imported with require (no ts declaration) */
const timestamps = require('mongoose-timestamp');
require('mongoose-type-email');

class MongoUserModel {
  private schema: mongoose.Schema;

  constructor() {
    this.schema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
      },
      email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
      },
      articles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'article',
      }],
    });
    this.schema.plugin(timestamps);
  }

  /**
   * Create the mongoose user model.
   */
  create(): any {
    return mongoose.model('user', this.schema);
  }
}

export default MongoUserModel;
