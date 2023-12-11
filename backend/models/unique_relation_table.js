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
    enum: ["A", "B"],
  },
  ids: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ids",
  },
});
export default mongoose.model("UniqueRelation", table_set_up);
