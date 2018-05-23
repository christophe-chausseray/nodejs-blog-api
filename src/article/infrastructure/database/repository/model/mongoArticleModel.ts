import mongoose, { Model } from "mongoose";
/** mongoose-timestamp needs to be imported with require (no ts declaration) */
const timestamps = require('mongoose-timestamp');

class MongoArticleModel {
  private schema: mongoose.Schema;

  constructor() {
    this.schema = new mongoose.Schema({
      slug: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      body: {
        type: String,
        required: true,
      },
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    });
    this.schema.plugin(timestamps);
  }

  /**
   * Create the mongoose article model.
   */
  public create(): any {
    return mongoose.model('article', this.schema);
  }
}

export default MongoArticleModel;
