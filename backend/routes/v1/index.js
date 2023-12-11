import express from "express";
import id_router from "./id_routes.js";
import CompanyRouter from "./company_routes.js";
import actorRouter from "./actor_routes.js";
import bankerRouter from "./banker_routes.js";
import bankRouter from "./bank_route.js";
import bankerEmployeeRouter from "./banker_employee_routes.js";

// TODO: Make unique relation route
const v1router = express.Router();

v1router.use("/id", id_router);
v1router.use("/actor", actorRouter);
v1router.use("/banker", bankerRouter);
v1router.use("/banker_employee", bankerEmployeeRouter);
v1router.use("/bank", bankRouter);
v1router.use("/company", CompanyRouter);

export default v1router;
