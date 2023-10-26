import mongoose from "mongoose"

const table_set_up = new mongoose.Schema({
    actor_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Actor"
    },
    banker_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Banker"
    },
    company:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Company_B"
    },
    company_type:{
        type: String,
        enum:["Company_A", "Company_B"]
    },
    personal_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"OnlyAdhar"
    },
    dummy_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"DummyId"
    },
    personal_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AdharOtpId"
    },

})
export default mongoose.model("UniqueRelation",table_set_up)
