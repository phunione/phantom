import  express from "express";
import bodyParser from "body-parser";
import v1router from "./v1/index.js";

const mainRoute = express.Router();
mainRoute.use(bodyParser.json())
mainRoute.use('/v1',v1router)
export default mainRoute

