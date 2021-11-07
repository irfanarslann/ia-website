const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    required: true,
    default: new Date().getTime(),
  },
});

module.exports = mongoose.model('User', UserSchema);
