import express from "express";
import bodyParser from "body-parser";
import {
  addUsertoOnly,
  update_only_adhar_details,
  get_only_adhar_users,
  addActorToOnlyId,
} from "../../controllers/only_adhar_controller.js";
const only_otp_router = express.Router();

only_otp_router.post("/add", addUsertoOnly);

only_otp_router.put("/edit/:id", update_only_adhar_details);

only_otp_router.get("/all", get_only_adhar_users);

only_otp_router.put("/addactortoOnly", addActorToOnlyId);

export default only_otp_router;
