import express from "express";
import bodyParser from "body-parser";
import { createBanker } from "../../controllers/banker_controller.js";

const bankerRouter = express.Router();

bankerRouter.use(bodyParser.json());

bankerRouter.post("/add", createBanker);

export default bankerRouter;
