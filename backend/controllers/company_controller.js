import Company from "../models/company.js"; // Import the "Company_B" model
import { add_pdfs } from "./genericFunctions/addpdf.js";

// Create a new Company A
export const post_company = async (req, res) => {
  try {
    const {
      unique_id_company_a,
      company_name,
      pan_no,
      pan_dob,
      company_status,
      querry_filled,
      address,
      isMaharashtra,
      location,
      actor_ids,
      owner_details,
      type
    } = req.body;

    const newCompany = new Company({
      unique_id_company,
      company_name,
      pan_no,
      pan_dob,
      company_status,
      querry_filled,
      address,
      isMaharashtra,
      location,
      actor_ids,
      owner_details,
      type
    });

    const savedCompany = await newCompany.save();
    //
    res.status(201).json(savedCompany);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating Company A.' });
  }
};

// Get a list of Company A
export const get_companies =  async (req, res) => {
  try {
    const {type} = req.body;
    const companies = await Company.find({type:type});
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching Company A records.' });
  }
};

// Get a single Company A by unique ID
export const get_company_id = async (req, res) => {
  try {
    const {id} = req.querry;
    const companyid = id;
    const company = await Company.findOne({ unique_id_company: companyid });

    if (!company) {
      res.status(404).json({ error: 'Company A not found' });
    } else {
      res.json(company);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching Company A.' });
  }
};

// Update a Company A record by unique ID
const update_compnay_from_id = async (req, res) => {
  try {
    const companyId = req.params.id;
    const updatedCompanyData = req.body;//sends in json format to in key value pairs which needs to be changed
    const updatedCompany = await Company.findOneAndUpdate(
      { unique_id_company: companyId },
      updatedCompanyData,
      { new: true }
    );

    if (!updatedCompany) {
      res.status(404).json({ error: 'Company not found' });
    } else {
      res.json(updatedCompany);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating Company A.' });
  }
};

// Delete a Company A record by unique ID
export const delete_company = async (req, res) => {
  try {
    const companyId = req.params.id;
    const deletedCompany = await Company.findOneAndDelete({ unique_id_company_a: companyId });

    if (!deletedCompany) {
      res.status(404).json({ error: 'Company not found' });
    } else {
      res.json(deletedCompany);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting Company A.' });
  }
};
export const adfs = async(req,res)=>{ 
  //req.body will conatian path of the pdf in the following format
  //push path of the pdf_file
  const id = req.query;
  const path = req.body;
  await add_pdfs(id,path,Company);


}
