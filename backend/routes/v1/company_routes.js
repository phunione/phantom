import express from "express";
import {
  post_company,
  get_companies,
  get_company_id,
  delete_company,
  adfs,
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
companyRouter.delete("/delete", delete_company);

export default companyRouter;
