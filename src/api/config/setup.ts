import mongoose from "mongoose";
import { backend, mode } from "./envvars";

const dbConnection = async () => {
  try {
    if (!backend) throw new Error("Backend URL not found");

    await mongoose.connect(backend);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function () {
      console.log(`Connected to the Remote Dataset in ${mode} environment`);
    });
  } catch (error) {
    console.log("Database connection error: " + (error as Error).message);
    process.exit(1);
  }
};


  export { dbConnection };