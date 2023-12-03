import BankerEmployee from "../models/bank_employee_model.js";

export const get_all_bankerEmployees = async (req, res) => {
  try {
    // Retrieve all users from the Prop_id collection

    const bankerEmployee = await BankerEmployee.find();

    return res.status(200).json(bankerEmployee);
  } catch (error) {
    return res.status(400).json({ success: false, error: error });
  }
};
