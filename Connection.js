import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const username = process.env.USER;
const password = process.env.PASSWORD;

const Connection = async (username, password) => {
  let URL = `mongodb+srv://firevol:${password}@cluster0.kvg8g.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

export default Connection;
