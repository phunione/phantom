import express from "express"
import {post_company, get_companies,get_company_id,delete_company,adfs,update_company_from_id} from '../../controllers/company_controller.js'
const CompanyRouter = express.Router();

CompanyRouter.post('/add',post_company);
CompanyRouter.get('/all',get_companies);
CompanyRouter.get('/:id',get_company_id);
CompanyRouter.put('/pdf/:id',adfs)
CompanyRouter.put('/edit/:id',update_company_from_id);
CompanyRouter.delete('/delete',delete_company)

export default CompanyRouter;