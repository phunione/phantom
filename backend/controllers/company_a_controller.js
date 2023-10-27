import Company_A from "../models/company_types/company_a_model.js"; // Import the "Company_B" model


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
    } = req.body;

    const newCompanyA = new Company_A({
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
    });

    const savedCompanyA = await newCompanyA.save();
    //
    res.status(201).json(savedCompanyA);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating Company A.' });
  }
};

// Get a list of Company A
export const get_companies =  async (req, res) => {
  try {
    const companies = await Company_A.find();
    res.json(companies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching Company A records.' });
  }
};

// Get a single Company A by unique ID
export const get_company_id = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company_A.findOne({ unique_id_company_a: companyId });

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
    const updatedCompany = await Company_A.findOneAndUpdate(
      { unique_id_company_a: companyId },
      updatedCompanyData,
      { new: true }
    );

    if (!updatedCompany) {
      res.status(404).json({ error: 'Company A not found' });
    } else {
      res.json(updatedCompany);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while updating Company A.' });
  }
};

// Delete a Company A record by unique ID
export const detelet_company = async (req, res) => {
  try {
    const companyId = req.params.id;
    const deletedCompany = await Company_A.findOneAndDelete({ unique_id_company_a: companyId });

    if (!deletedCompany) {
      res.status(404).json({ error: 'Company A not found' });
    } else {
      res.json(deletedCompany);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while deleting Company A.' });
  }
};


