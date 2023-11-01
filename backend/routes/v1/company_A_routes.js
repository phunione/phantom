import express from "express"
import {post_company, get_companies,get_company_id,delete_company,update_compnay_from_id} from '../../controllers/company_a_controller.js'
const CompanyArouter = express.Router();

CompanyArouter.post('/add',post_company);
CompanyArouter.get('/all',get_companies);
CompanyArouter.get('/all/:id',get_company_id);

CompanyArouter.put('/edit/:id',update_compnay_from_id);
CompanyArouter.delete('/delete',delete_company)

export default CompanyArouter;