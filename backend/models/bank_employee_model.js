import mongoose from "mongoose"


const banker_employee_schema = new mongoose.Schema({

    unique_banker_employee_id :{
        type: String,
        required: true,
        unique: true
    },
    
    name: {
        type: String,
        required : true
    },
    banker_id:{
        type:mongoose.Schema.Types.unique_banker_id,
        ref : 'Banker'
    }

    
})
export default mongoose.model("BankerEmployee", banker_employee_schema)