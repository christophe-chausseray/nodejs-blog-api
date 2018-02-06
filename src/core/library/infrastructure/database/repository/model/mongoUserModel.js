const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
require('mongoose-type-email');

class MongoUserModel {
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
   *
   * @return {Function}
   */
  create() {
    return mongoose.model('user', this.schema);
  }
}

module.exports = MongoUserModel;
