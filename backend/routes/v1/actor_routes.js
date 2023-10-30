import express from "express";
import bodyParser from "body-parser";
import {
  addActor,
  get_all_actors,
  update_actor_details,
} from "../../controllers/actor_id_controller";

const actorRouter = express.Router();

actorRouter.use(bodyParser.json());

actorRouter.post("/add", addActor);
actorRouter.get("/all", get_all_actors);
actorRouter.put("/edit", update_actor_details);

export default actorRouter;
