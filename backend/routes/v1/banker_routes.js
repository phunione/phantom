import express from "express";
import bodyParser from "body-parser";
import {
  createBanker,
  update_Banker_details,
  get_all_banker,
  get_banker_by_id,
} from "../../controllers/banker_controller.js";

const bankerRouter = express.Router();

bankerRouter.use(bodyParser.json());

bankerRouter.post("/add", createBanker);
bankerRouter.put("/edit/:id", update_Banker_details);
bankerRouter.get("/all", get_all_banker);
bankerRouter.get("/:id", get_banker_by_id);

export default bankerRouter;
