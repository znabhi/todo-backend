import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_CONNECTION_STRING}/${DB_NAME}`
    );
    console.log(
      `mongoDB is connected succefully ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(`Failed to connect mongoDb ${error}`);
  }
};

export default connectionDB;
