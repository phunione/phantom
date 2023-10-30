// import express from "express"
// import mongoose from "mongoose"
// import bodyParser from "body-parser"
// import testRoute from "./routes/v1/test.js"
// import cookieParser from "cookie-parser"
// const app =  express()
// app.use(bodyParser.json());

// mongoose.connect("mongodb://127.0.0.1:27017/myapp").then(()=>{
//     console.log("connection established")
// }).catch((err)=>{
//     console.log(err)
// })

// app.use('/routes',testRoute)

// app.listen(8800,()=>{
//     console.log("server started")
// })
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import mainRoute from "./routes/index.js";
import cors from "cors";

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
app.use(cookieParser());
app.use(express.json());
// app.use("/api/users", userRoutes);
// app.use("/api/auth", authRoutes);
// app.use("/api/tweets", tweetRoutes);
app.use("/api", mainRoute);
// app.use('/routes',testRoute)

app.listen(8800, () => {
  connect();
  console.log("Listening to port 8800");
});
