import express from "express"
import bodyParser from "body-parser";
import { add_dummy_user, addActorToDummyId, update_dummy_details, get_dummy_users } from "../../controllers/dummy_id_controller.js"

const dummy_id_router = express.Router();

dummy_id_router.use(bodyParser.json())

dummy_id_router.post("/adduser",add_dummy_user)

dummy_id_router.put("/updatedetails",update_dummy_details)

dummy_id_router.get("/getusers",get_dummy_users)

dummy_id_router.put("/addactortodummy", addActorToDummyId)

export default dummy_id_router;