const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
  title: { type: String, required: true },
  createTime: { type: Date, default: new Date().getTime() },
  content: { type: String, required: true },
});

module.exports = mongoose.model('Blog', BlogSchema);
