import express from "express"
import { addBank } from "../../controllers/bank_controller.js";

const BankRouter = express.Router();

BankRouter.post('/addbank',addBank)

export default BankRouter;