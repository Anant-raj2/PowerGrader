import app from "./app";
import "dotenv/config";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;


mongoose.connect(env.MONGO_CONN).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
}).catch(console.error);