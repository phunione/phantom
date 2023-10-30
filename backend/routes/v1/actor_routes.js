import express from "express";
import bodyParser from "body-parser"
import { addActor, get_all_actors, update_actor_details } from "../../controllers/actor_id_controller";

const actorRouter = express.Router()

actorRouter.post("/addActor",addActor);
actorRouter.get("/getActor",get_all_actors);
actorRouter.put("/updateActor",update_actor_details);

export default actorRouter;
