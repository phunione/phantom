import express from "express";
import {
  addBank,
  add_banker_id,
  getAllBanks,
  update_bank_details,
  get_Bank,
  deleteBankById
} from "../../controllers/bank_controller.js";

const BankRouter = express.Router();

BankRouter.post("/add", addBank);
BankRouter.get("/all", getAllBanks);

//populate both banker and bank from put req
BankRouter.put("/addBanker", add_banker_id);
//this will crate a relation 


BankRouter.put("/edit/:id", update_bank_details);
BankRouter.get("/:id", get_Bank);
BankRouter.delete('/delete/:id',deleteBankById)
export default BankRouter;
