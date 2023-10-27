import mongoose from "mongoose"

const compnay_model = new mongoose.Schema({
    company_a:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Company_A"
    },
    company_b:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Company_B"
    },
    type:{
        type:String,
        enum:["CompanyA","CompanyB"]
    }
})

export default mongoose.model("Company",compnay_model);