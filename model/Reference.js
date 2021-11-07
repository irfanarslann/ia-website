const mongoose = require('mongoose');

const ReferenceSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
    default: new Date().getTime(),
  },
});

module.exports = mongoose.model('References', ReferenceSchema);
