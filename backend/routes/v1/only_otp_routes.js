import express from "express";
import bodyParser from "body-parser";
import {addUsertoOnlyAdhar, addActorToOnlyAdhar, get_only_adhar_users,update_only_adhar_details} from "../../controllers/only_adhar_contoller.js"
const only_otp_router = express.Router() 

only_otp_router.post("/addUser",addUsertoOnlyAdhar)

only_otp_router.get("/getuser",get_only_adhar_users)

only_otp_router.put("/addActor",addActorToOnlyAdhar);

only_otp_router.put("/updateDetails",update_only_adhar_details)

export default only_otp_router