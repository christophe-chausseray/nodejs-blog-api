const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

class MongoArticleModel {
  constructor() {
    this.schema = new mongoose.Schema({
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
   *
   * @return {Function}
   */
  create() {
    return mongoose.model('article', this.schema);
  }
}

module.exports = MongoArticleModel;
