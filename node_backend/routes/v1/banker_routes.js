import express from "express";
import bodyParser from "body-parser";
import {
  createBanker,
  update_Banker_details,
  get_all_banker,
  get_banker_by_id,
  add_comany_id_to_banker,
  delete_banker_by_id,
} from "../../controllers/banker_controller.js";

const bankerRouter = express.Router();

bankerRouter.use(bodyParser.json());
//try this route to populate baker and company id both from single api
bankerRouter.put("/compnaytobanker/:id", add_comany_id_to_banker);
//run a for loop from the array from input and call this for every id in array

bankerRouter.post("/add", createBanker);
bankerRouter.put("/edit/:id", update_Banker_details);
bankerRouter.get("/all", get_all_banker);
bankerRouter.get("/:id", get_banker_by_id);
bankerRouter.delete("/delete/:id", delete_banker_by_id);

export default bankerRouter;
