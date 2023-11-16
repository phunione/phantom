import mongoose from "mongoose";

const bank_schema = new mongoose.Schema({
  unique_bank_id: {
    type: String,
    required: true,
    unique: true,
  },
  account_numbers: {
    type: String,
    required: true,
  },
  comapany_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  ],
  ifsc: {
    type: String,
    required: true,
    unique: true,
  },
  ad_code: {
    type: String,
    unique: true,
  },
  swift_code: {
    type: String,
    unique: true,
  },
  banker_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Banker",
    },
  ],
});
export default mongoose.model("Bank", bank_schema);
