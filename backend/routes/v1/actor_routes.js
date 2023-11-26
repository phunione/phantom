import express from "express";
import bodyParser from "body-parser";
import {
  addActor,
  getActor,
  get_all_actors,
  update_actor_details,
} from "../../controllers/actor_id_controller.js";

const actorRouter = express.Router();

actorRouter.use(bodyParser.json());

actorRouter.post("/add", addActor);
actorRouter.get("/all", get_all_actors);
actorRouter.get("/:id", getActor);
actorRouter.put("/edit/:id", update_actor_details);

export default actorRouter;
