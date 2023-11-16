import Banker from "../models/banker_model.js"; // Assuming you have a "Banker" model defined
import Company_A from "../models/company_types/company_a_model.js";
import Company_B from "../models/company_types/company_b_model.js";

import BankerEmployee from "../models/bank_employee_model.js";
import updateDocument from "./genericFunctions/updateDocument.js";

const createBanker = async (req, res) => {
  try {
    const {
      banker_name,
      rtds,
      rt,
      forex,
      demand,
      banker_employee_ids,
      company_ids,
      actor_ids,
      bank_ids,
    } = req.body;

    const unique_banker_id = Date.now().toString();

    console.log(unique_banker_id);

    const newBanker = new Banker({
      unique_banker_id,
      name: banker_name,
      rtds: rtds || false, // Default values if not provided in the request
      rt: rt || false,
      forex: forex || false,
      demand,
      banker_employee_ids,
      company_ids,
      actor_ids,
      bank_ids,
    });

    const savedBanker = await newBanker.save();
    res.status(201).json(savedBanker);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the banker." });
  }
};
export const update_Banker_details = async (req, res) => {
  const { id } = req.querry;
  const update_details = req.body;
  try {
    const banker = await Banker.findOne({ unique_banker_id: id });
    await updateDocument(Banker, banker._id, update_details, res);
  } catch (error) {
    return res
      .status(300)
      .json({ success: false, message: "error in updating anker details" });
  }
};
const add_banker_employee_ids = async (req, res) => {
  const { id } = req.query;
  const { banker_id, banker_employee_id } = req.body;
  try {
    //check if bank_emplioyee already have banker
    const existingBankerEmployee = await BankerEmployee.find({
      unique_banker_employee_id: banker_employee_id,
    });
    if (existingBankerEmployee) {
      if (existingBankerEmployee.banker_id === null) {
        await updateDocument(BankerEmployee, existingBankerEmployee[0]._id, {
          banker_id: banker_id,
        });
        //find existing banker in the database
        const banker_list = await Banker.findOne({
          unique_banker_id: banker_id,
        });

        //before adding emplyer to banker check if there is already this banker_employee exists
        if (
          banker_list.findOne({
            banker_employee_ids: existingBankerEmployee[0]._id,
          })
        ) {
          return res.status(400).json({
            success: false,
            message: "Employee already have a banker",
          });
        } else {
          banker_list.banker_employee_ids.push(existingBankerEmployee[0]._id);
        }
      } else {
        return res
          .status(400)
          .json({ success: false, message: "Employee already have a banker" });
      }
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const add_comany_id_to_banker = async (req, res) => {
  const { id } = req.query;
  const { company_id, banker_id } = req.body;
  try {
    const CA = true;
    const existingCompanyid = await Company_A.findOne({
      unique_id_company_a: company_id,
    });
    if (!existingCompanyid) {
      CA = false;
      existingCompanyid = await Company_B.findOne({
        unique_id_company_b: company_id,
      });
    }
    if (!existingCompanyid) {
      return res
        .status(400)
        .json({ success: false, message: "Company not found" });
    }
    const existingBanker = await Banker.findOne({
      unique_banker_id: banker_id,
    });

    await existingBanker.company_ids.push(existingCompanyid._id);
    await existingCompanyid.update({ banker_id: existingBanker._id });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `error in add_comany_id_to_banker ${error}`,
    });
  }
};

export { createBanker, add_banker_employee_ids, add_comany_id_to_banker };
