
import Company_B from "../models/company_types/company_b_model.js"; // Import the "Company_B" model


// Create a new Company B
export const postCompanyB = async (req, res) => {
  try {
    const {
      unique_id_company_b,
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
      bank_id,
      banker_id,
      account_number,
    } = req.body;

    const newCompanyB = new Company_B({
      unique_id_company_b,
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
      bank_id,
      banker_id,
      account_number,
    });

    const savedCompanyB = await newCompanyB.save();
    res.status(201).json(savedCompanyB);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating Company B.' });
  }
};

// Get a list of Company B
export const getCompaniesB = async (req, res) => {
  try {
    const companies = await Company_B.find();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching Company B records.' });
  }
};

// Get a single Company B by unique ID
export const getCompanyBById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company_B.findOne({ unique_id_company_b: companyId });

    if (!company) {
      res.status(404).json({ error: 'Company B not found' });
    } else {
      res.json(company);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching Company B.' });
  }
};

// Update a Company B record by unique ID
export const updateCompanyBById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const updatedCompanyData = req.body;
    const updatedCompany = await Company_B.findOneAndUpdate(
      { unique_id_company_b: companyId },
      updatedCompanyData,
      { new: true }
    );

    if (!updatedCompany) {
      res.status(404).json({ error: 'Company B not found' });
    } else {
      res.json(updatedCompany);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating Company B.' });
  }
};

// Delete a Company B record by unique ID
export const deleteCompanyB = async (req, res) => {
  try {
    const companyId = req.params.id;
    const deletedCompany = await Company_B.findOneAndDelete({ unique_id_company_b: companyId });

    if (!deletedCompany) {
      res.status(404).json({ error: 'Company B not found' });
    } else {
      res.json(deletedCompany);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting Company B.' });
  }
};


