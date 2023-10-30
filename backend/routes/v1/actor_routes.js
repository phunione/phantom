import express from "express";
import bodyParser from "body-parser";
import { addActor } from "../../controllers/actor_id_controller.js";

const actorRouter = express.Router();

actorRouter.use(bodyParser.json());

actorRouter.post("/add", addActor);

export default actorRouter;
