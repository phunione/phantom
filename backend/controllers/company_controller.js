import Company from "../models/company.js"; // Import the "Company_B" model
import { add_pdfs } from "./genericFunctions/addpdf.js";
import fs from 'fs'
export const post_company = async (req, res) => {
  try {
    console.log(req.body)
    const {
      name,
      pan_no,
      pan_dob,
      company_status,
      querry_filled,
      address,
      isMaharashtra,
      location,
      actor_ids,
      owner_details,
      type,
      pdfs
    } = req.body;
    const pdfBuffer1 = fs.readFileSync(pdfs);
    const pdfObject = {
      title: `${Date.now()} ${id}`,
      pdfData: pdfBuffer1,  // The binary data of the first PDF
      contentType: 'application/pdf',
  }
    const unique_company_id = Date.now().toString();

    const newCompany = new Company({
      unique_company_id,
      name,
      pan_no,
      pan_dob,
      company_status,
      querry_filled,
      address,
      isMaharashtra,
      location,
      actor_ids,
      owner_details,
      type,
      pdfObject
    });

    const savedCompany = await newCompany.save();

    res.status(201).json(savedCompany);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating Company A." });
  }
};

// Get a list of Company A
export const get_companies = async (req, res) => {
  try {
    const companies = await Company.find();

    return res.status(200).json(companies);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// Get a single Company A by unique ID
export const get_company_id = async (req, res) => {
  try {
    const { id } = req.params;
    const company = await Company.findById(id);

    if (!company) {
      res.status(404).json({ error: "Company A not found" });
    } else {
      res.json(company);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching Company A." });
  }
};

// Update a Company A record by unique ID
export const update_company_from_id = async (req, res) => {
  try {
    const companyId = req.params.id;
    const updatedCompanyData = req.body; //sends in json format to in key value pairs which needs to be changed
    const updatedCompany = await Company.findOneAndUpdate(
      { _id: companyId },
      updatedCompanyData,
      { new: true },
    );

    if (!updatedCompany) {
      res.status(404).json({ error: "Company not found" });
    } else {
      res.json(updatedCompany);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating Company A." });
  }
};

// Delete a Company A record by unique ID
export const delete_company = async (req, res) => {
  try {
    const companyId = req.params.id;
    const deletedCompany = await Company.findOneAndDelete({
      _id: companyId,
    });

    if (!deletedCompany) {
      res.status(404).json({ error: "Company not found" });
    } else {
      res.json(deletedCompany);
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting Company A." });
  }
};
export const adfs = async (req, res) => {
  //req.body will conatian path of the pdf in the following format
  //push path of the pdf_file
  const id = req.params;
  const path = req.body;
  await add_pdfs(id, path, Company);
};
