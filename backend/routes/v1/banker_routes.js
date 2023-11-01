import express from "express";
import bodyParser from "body-parser";
import { createBanker,update_Banker_details } from "../../controllers/banker_controller.js";

const bankerRouter = express.Router();

bankerRouter.use(bodyParser.json());

bankerRouter.post("/add", createBanker);
bankerRouter.put('/edit/:id', update_Banker_details);

export default bankerRouter;
