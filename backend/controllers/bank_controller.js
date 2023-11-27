import Bank from "../models/bank_model.js";
import Banker from "../models/banker_model.js";
export const addBank = async (req, res) => {
  try {
    // Extract individual properties from the request body
    const {
      account_numbers,
      banker_ids,
      company_ids,
      ifsc,
      ad_code,
      swift_code,
    } = req.body;

    const unique_bank_id = Date.now().toString();

    console.log(unique_bank_id);
    // Check if a bank with the same unique_bank_id already exists
    const existingBank = await Bank.findOne({ unique_bank_id });

    if (existingBank) {
      return res
        .status(409)
        .json({ error: "Bank with the same unique_bank_id already exists" });
    }

    // Create a new Bank instance using the Bank model
    const bank = new Bank({
      unique_bank_id,
      account_numbers,
      banker_ids,
      company_ids,
      ifsc,
      ad_code,
      swift_code,
    });

    // Save the bank data to the database
    const savedBank = await bank.save();

    res.status(201).json(savedBank); // Respond with the saved bank data
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Failed to add a bank" });
  }
};

export const getAllBanks = async (req, res) => {
  try {
    const banks = await Bank.find();
    res.status(200).json(banks);
  } catch (error) {
    res.status(400).json({ error: "Failed to get all banks" });
  }
};

export const update_bank_details = async (req, res) => {
  const unique = ["unique_bank_id", "ifsc", "ad_code", "swift_code"];
  const updateData = req.body;
  const { id } = req.query;
  try {
    const key = Object.keys(updateData)[0];
    const index = unique.indexOf(key);

    if (index !== -1) {
      const isDuplicate = await duplicateCheck(Bank, id, updateData); //this will check if the updated details already exits in the database

      if (isDuplicate) {
        return res.send({
          success: false,
          message: `Duplicate found ${updateData}`,
        });
      }
    }

    await updateDocument(Bank, id, updateData, res);
  } catch (error) {
    console.log(error);

    res.status(500).send({ success: false, message: "An error occurred" });
  }
};

export const get_Bank = async (req, res) => {
  try {
    const { id } = req.params;

    const bank = await Bank.findById(id);

    return res.status(200).json(bank);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const add_banker_id = async (req, res) => {
  const { bankerId, bankId } = req.body;
  try {
    // Retrieve the existing Prop_id document based on _id
    const existingBankId = await Bank.find({ unique_bank_id: bankId });
    const existingBankerId = await Banker.find({ unique_banker_id: bankerId });
    if (!existingBankId) {
      return res
        .status(404)
        .json({ success: false, message: "bank not found" });
    }
    if (!existingBankerId) {
      return res
        .status(404)
        .json({ success: false, message: "Banker not found" });
    }
    // console.log("Actor Id",existingBankerId[0]._id)

    // Push the new Actor ID into the banker_ids array
    existingBankId[0].banker_ids.push(existingBankerId[0]._id);
    existingBankerId[0].bank_ids.push(existingBankId[0]._id);
    // Save the updated document
    await existingBankId[0].save();
    await existingBankerId[0].save();
    return res.status(200).json({
      success: true,
      message: "banker id added to banker_ids",
      bankerId: existingBankerId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error });
  }
};
