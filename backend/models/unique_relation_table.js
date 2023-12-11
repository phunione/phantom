import mongoose from "mongoose";

const table_set_up = new mongoose.Schema({
  actor_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Actor",
  },
  banker_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Banker",
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  company_type: {
    type: String,
    enum: ["Company_A", "Company_B"],
  },
  owner_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
  },
});
export default mongoose.model("UniqueRelation", table_set_up);
