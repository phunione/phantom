import express from "express";
import {
  adfs,
  delete_company,
  get_companies,
  get_company_id,
  post_company,
  update_company_from_id,
} from "../../controllers/company_controller.js";
import bodyParser from "body-parser";

const companyRouter = express.Router();

companyRouter.use(bodyParser.json());

companyRouter.post("/add", post_company);
companyRouter.get("/all", get_companies);
companyRouter.get("/:id", get_company_id);
companyRouter.put("/pdf/:id", adfs);
companyRouter.put("/edit/:id", update_company_from_id);
companyRouter.delete("/delete/:id", delete_company);

export default companyRouter;
