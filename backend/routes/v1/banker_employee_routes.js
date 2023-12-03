import express from "express";
import bodyParser from "body-parser";
import { get_all_bankerEmployees } from "../../controllers/banker_employee_controller.js";

const bankerEmployeeRouter = express.Router();

bankerEmployeeRouter.use(bodyParser.json());

bankerEmployeeRouter.get("/all", get_all_bankerEmployees);

export default bankerEmployeeRouter;
