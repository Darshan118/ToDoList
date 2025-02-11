import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connection = async () => {
  try {
    await mongoose.connect(MONGO_URI);
  } catch (err) {
    console.log(err);
  }
};

module.exports.connection = connection;
