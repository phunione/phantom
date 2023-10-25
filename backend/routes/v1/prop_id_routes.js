import express from "express";
import bodyParser from "body-parser";
import {addUsertoProp, get_prop_users, addActorToPropId, update_prop_details} from "../../controllers/prop_id_controller.js";

const prop_id_router = express.Router()

prop_id_router.use(bodyParser.json())

prop_id_router.post("/adduser",addUsertoProp)//add middleware to check the permissions

prop_id_router.get("/getusers",get_prop_users)//add middleware to check the permissions

prop_id_router.put("/addactor",addActorToPropId)//add middleware to check the permissions

prop_id_router.put("/updateprop",update_prop_details)//add middleware to check the permissions

export default prop_id_router