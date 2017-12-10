const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const ArticleSchema = new mongoose.Schema({
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
ArticleSchema.plugin(timestamps);

/**
 * @typedef User
 */
module.exports = mongoose.model('article', ArticleSchema);
