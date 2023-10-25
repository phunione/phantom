import mongoose, { mongo } from "mongoose"

const company_a_model = new mongoose.Schema({
    unique_id_company_a:{
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

    actor_ids: {
        type: [{type: mongoose.Schema.Types.unique_actor_id, ref:'Actor'}]
         
    },
    owner_details:[{
        type:mongoose.Schema.Types.Oject_id,
        required: true,

    }],
    





})

export default mongoose.model( "Company_A",company_a_model)