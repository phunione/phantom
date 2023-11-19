import express from "express";
import bodyParser from "body-parser";
import {
  addUsertoId,
  get_ids,
  addActorToId,
  update_details,
} from "../../controllers/id_controller.js";

const id_router = express.Router();

id_router.use(bodyParser.json());

id_router.post("/add", addUsertoId); //add middleware to check the permissions

id_router.get("/all", get_ids); //add middleware to check the permissions

id_router.put("/addactor", addActorToId); //add middleware to check the permissions

id_router.put("/edit/:id", update_details); //add middleware to check the permissions

export default id_router;
