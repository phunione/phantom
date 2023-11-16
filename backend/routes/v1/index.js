import express from "express";
import adhar_otp_router from "./adhar_otp_routes.js";
import prop_id_router from "./prop_id_routes.js";
import dummy_id_router from "./dummy_id_routes.js";
import only_otp_router from "./only_otp_routes.js";
import actorRouter from "./actor_routes.js";
import bankerRouter from "./banker_routes.js";
import bankRouter from "./bank_route.js";
const v1router = express.Router();

v1router.use("/adharotp", adhar_otp_router);
v1router.use("/propid", prop_id_router);
v1router.use("/onlyid", only_otp_router);
v1router.use("/dummy", dummy_id_router);
v1router.use("/actor", actorRouter);
v1router.use("/banker", bankerRouter);
v1router.use("/bank", bankRouter);

export default v1router;
