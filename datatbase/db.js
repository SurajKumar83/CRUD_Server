// we can use mongodb or mongoose to connect to the database
import mongoose from "mongoose";

const Connection = async (URL) => {
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database is connected successfully");
    // here we are using the new UnifiedTopology for so we make it true,and  use the new url parser
  } catch (error) {
    console.log("Error whiling connecting", error);
  }
};
export default Connection;
