import express from "express"
import { addBank , add_banker_id, getAllBanks, update_bank_details,get_Bank} from "../../controllers/bank_controller.js";

const BankRouter = express.Router();

BankRouter.post('/add',addBank)
BankRouter.get('/all', getAllBanks)
BankRouter.put('/addBanker', add_banker_id)
BankRouter.put('/edit/:id', update_bank_details)
BankRouter.get('/:id',get_Bank)
export default BankRouter;