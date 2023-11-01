import express from "express"
import {postCompanyB, getCompaniesB,getCompanyBById,deleteCompanyB,updateCompanyBById} from '../../controllers/company_b_controller.js'
const CompanyBrouter = express.Router();

CompanyBrouter.post('/add',postCompanyB);
CompanyBrouter.get('/all',getCompaniesB);
CompanyBrouter.get('/all/:id',getCompanyBById);

CompanyBrouter.put('/edit/:id',updateCompanyBById);
CompanyBrouter.delete('/delete',deleteCompanyB)

export default CompanyArouter;