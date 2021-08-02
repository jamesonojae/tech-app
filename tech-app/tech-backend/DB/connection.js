const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
// const url = process.env.DATABASE_ACCESS_KEY;

const connectDB = async () => {
  try {
    // connection string
    const con = await mongoose.connect(process.env.DATABASE_ACCESS_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true
    });
    console.log(`MonogoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
