// noinspection JSUnresolvedReference

import Company from "../models/company.js"; // Import the "Company_B" model
import { add_pdfs } from "./genericFunctions/addpdf.js";

export const edit_comapny = async (req, res) => {
  const { id } = req.params;
  try {
  } catch (error) {
    return res.send(400).json();
  }
};

export const post_company = async (req, res) => {
  try {
    //TODO: Get the file(pdfs) from "req.files" and other data from "req.body"
    //TODO: on how to do all the stuff from the file I recommend using the internet as I am also not sure on how to do this in node js (isme files access ho paye uske liye alag jhanjhat kra hai index.js mei)
    console.log("body", req.body);
    console.log("files", req.files);
    var {
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
    } = req.body;

    const { pdfs } = req?.files || {};

    const pdfObject = pdfs && {
      title: `${Date.now()} ${pdfs.name}`,
      pdfData: pdfs.data, // The binary data of the first PDF
      contentType: "application/pdf",
    };

    const unique_company_id = Date.now().toString();

    const actor_ids_to_push = [];
    actor_ids =
      typeof actor_ids === "string" && actor_ids !== "undefined"
        ? JSON.parse(actor_ids)
        : [];
    if (actor_ids.length) {
      actor_ids.forEach((items) => {
        actor_ids_to_push.push(items.object_id);
      });
    }

    const owner_ids_to_push = [];
    owner_details =
      typeof owner_details === "string" && owner_details !== "undefined"
        ? JSON.parse(owner_details)
        : [];
    if (owner_details.length) {
      owner_details.map((items) => {
        owner_ids_to_push.push(items.object_id);
      });
    }

    const newCompany = new Company({
      unique_company_id,
      name,
      pan_no,
      pan_dob,
      company_status,
      querry_filled,
      address: address === "undefined" ? "" : address,
      isMaharashtra,
      location,
      actor_ids: actor_ids_to_push,
      owner_details: owner_ids_to_push,
      type,
      pdfs: pdfObject,
    });

    const savedCompany = await newCompany.save();

    res.status(201).json(savedCompany);
  } catch (error) {
    console.error(error);
    res
      .status(400)
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
