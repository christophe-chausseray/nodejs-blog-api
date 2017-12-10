const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
require('mongoose-type-email');

const UserSchema = new mongoose.Schema({
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
  articles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'article',
    },
  ],
});
UserSchema.plugin(timestamps);

/**
 * @typedef User
 */
module.exports = mongoose.model('user', UserSchema);
