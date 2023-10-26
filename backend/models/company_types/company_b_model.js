import mongoose from "mongoose"

const company_b_model = new mongoose.Schema({
    unique_id_company_b:{
        type: String,
        required: true,
        unique:true
        },
    company_name:{
        type: String,
        required:[true,"please enter Company Name"]
    },
    pan_no:{
        type: String,
        unique : true,
        required : [true,"please enter Pan Number"]
    },
    pan_dob:{
        type: Date(),
        required:[true,"please enter Pan DOB"]
    },
    company_status:{
        type: String,
        enum : ["applied","aproved","querry", "querryFilled","rejected"],
        
    },
    querry_filled:{
        type:Date(),
        required:[true,,"please enter querry Filled date"], 
    },
    //add querry expire in frontend using querry filed value
    address:{
        type:String,
        required:[true,"please enter Address of comapny"]
    },
    isMaharashtra:{
        type:Boolean,
        required:true
    },
    location:{
        type:String,
        enum:[
            "Andhra Pradesh",
            "Arunachal Pradesh",
            "Assam",
            "Bihar",
            "Chhattisgarh",
            "Goa",
            "Gujarat",
            "Haryana",
            "Himachal Pradesh",
            "Jharkhand",
            "Karnataka",
            "Kerala",
            "Madhya Pradesh",
            "Maharashtra",
            "Manipur",
            "Meghalaya",
            "Mizoram",
            "Nagaland",
            "Odisha",
            "Punjab",
            "Rajasthan",
            "Sikkim",
            "Tamil Nadu",
            "Telangana",
            "Tripura",
            "Uttar Pradesh",
            "Uttarakhand",
            "West Bengal"
        ],
        required: ()=>{
            return !(isMaharashtra)
        }

    },
    actor_ids: [{
            type: mongoose.Schema.Types.unique_actor_id,
            ref:'Actor'
        }]
    ,
    owner_details:[{
        type:mongoose.Schema.Types.Object_id,
        required: true,

    }],
    bank_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Bank",
        required:true,

    },
    banker_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Banker",
        required:true,
    },
    account_number:{
        type:String,
        required: true
    }


})

export default mongoose.model("Company_B",company_b_model)