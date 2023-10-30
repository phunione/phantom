import express from "express";
import bodyParser from "body-parser"
import { addActor } from "../../controllers/actor_id_controller";

const actorRouter = express.Router()

actorRouter.post(addActor);

export default actorRouter;
