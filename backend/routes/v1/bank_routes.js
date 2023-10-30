import express from "express";
import bodyParser from "body-parser";
import { addBank } from "../../controllers/bank_controller.js";

const bankRouter = express.Router();

bankRouter.use(bodyParser.json());

bankRouter.post("/add", addBank);

export default bankRouter;
