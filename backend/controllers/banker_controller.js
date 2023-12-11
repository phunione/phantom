import Banker from "../models/banker_model.js"; // Assuming you have a "Banker" model defined
import Company from "../models/company.js";
// import Company_B from "../models/company_types/company_b_model.js";
import BankerEmployee from "../models/bank_employee_model.js";
import updateDocument from "./genericFunctions/updateDocument.js";

const createBanker = async (req, res) => {
  try {
    const {
      name,
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

    const newBanker = new Banker({
      unique_banker_id,
      name,
      rtds: rtds || false, // Default values if not provided in the request
      rt: rt || false,
      forex: forex || false,
      demand,
      // TODO: GET THE OBJECTS OF THESE BELOW MENTIONED IDs AND THEN ADD THEM!!
      // banker_employee_ids,
      // company_ids,
      // actor_ids,
      // bank_ids,
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
  const { id } = req.params;
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
const get_all_banker = async (req, res) => {
  try {
    // Retrieve all users from the Prop_id collection

    const users = await Banker.find();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

const add_comany_id_to_banker = async (req, res) => {
  const { id } = req.params;
  const { company_id, banker_id } = req.body;
  try {
    const existingCompanyid = await Company.findOne({
      unique_id_company: company_id,
    });
    // if (!existingCompanyid) {
    //   CA = false;
    //   existingCompanyid = await Company_B.findOne({
    //     unique_id_company_b: company_id,
    //   });
    // }
    if (!existingCompanyid) {
      return res
        .status(400)
        .json({ success: false, message: "Company not found" });
    }
    const existingBanker = await Banker.findOne({
      unique_banker_id: banker_id,
    });

    const a = await existingBanker.company_ids.push(existingCompanyid._id);
    const b = await existingCompanyid.update({ banker_id: existingBanker._id });
    existingBanker.save();
    existingCompanyid.save();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `error in add_comany_id_to_banker ${error}`,
    });
  }
};

const get_banker_by_id = async (req, res) => {
  try {
    const { id } = req.params;

    const banker = await Banker.findById(id);

    return res.status(200).json(banker);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
};
const delete_banker_by_id = async (req, res) => {
  const { id } = req.params; // Assuming bankId is passed in the URL parameters

  try {
    const deletedBank = await Banker.findByIdAndDelete(id);

    if (!deletedBank) {
      return res.status(404).json({ message: "Bank not found" });
    }

    return res
      .status(200)
      .json({ message: "Bank deleted successfully", deletedBank });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting bank", error: error.message });
  }
};
export {
  createBanker,
  add_banker_employee_ids,
  add_comany_id_to_banker,
  get_banker_by_id,
  get_all_banker,
  delete_banker_by_id,
};
