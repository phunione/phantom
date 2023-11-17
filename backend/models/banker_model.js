import mongoose from "mongoose";

const banker_schema = new mongoose.Schema({
  unique_banker_id: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },
  rtds: {
    type: Boolean,
    default: false,
  },
  rt: {
    type: Boolean,
    default: false,
  },
  forex: {
    type: Boolean,
    default: false,
  },
  demand: {
    type: String,
    enum: ["one", "both", "none"],
    required: false,
  },
  banker_employee_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BankEmployee",
    },
  ],
  company_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
  ],
  actor_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Actor",
    },
  ], //one actor for one comapny
  bank_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bank",
    },
  ],
});
export default mongoose.model("Banker", banker_schema);
