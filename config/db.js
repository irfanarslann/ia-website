const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');
const connectDb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected');
  } catch (err) {
    console.log(err);
    
  }
};

module.exports = connectDb;
