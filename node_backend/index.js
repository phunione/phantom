import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import mainRoute from "./routes/index.js";
import cors from "cors";
import fileUpload from "express-fileupload";

const app = express();
dotenv.config();

const uri =
  "mongodb+srv://kush0347:Dv0kipPnU77RH7Sr@phantom.wtwvhwm.mongodb.net/phantom?retryWrites=true&w=majority";

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Mongodb connected");
    })
    .catch((err) => {
      throw err;
    });
};

app.use(cors());
app.use(fileUpload());
app.use(cookieParser());
app.use(express.json());

// app.use("/api/auth", authRoutes);
app.use("/api", mainRoute);

app.listen(8800, () => {
  connect();
  console.log("Listening to port 8800");
});
