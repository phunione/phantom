import mongoose from "mongoose"
var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const Schema = mongoose.Schema()
const adhar_otp_schema = new mongoose.Schema({
    unique_id_only :{
        type: String,
        required: true
    },
    name:{
        type: String,
        required:[true,"please enter Name"]
    },
    adhar_number_id:{
        type: String,
        unique:true,
        required: [true,"please enter adharNumber"]
    },
    pan_numeber_id:{
        type:String,
        unique:true,
        required: [true,"please enter pan number"]
    },
    din_number:{
        type:String,
        unique:true,
        required: [true,"please enter DIN"]
    },
    mother_name:{
        type:String,
        required : false,
    },
    address:{
        type:String,
        required : false,
    },
    actor_ids:[
        {
            type: mongoose.Schema.Types.ObjectId, ref: "Actor"
        } 
    ],//forigen key maany to many relations
    //instancse.actor_ids.push('mongo id of Actor)
    //add doccuments later
    company_ids: [
        {type: mongoose.Schema.Types.ObjectId,ref :"Company"}
    ],
    banker_ids: [
        {type: mongoose.Schema.Types.ObjectId , ref : "Banker"}
    ]
    //for banker connections 

} )
export default mongoose.model('OnlyAdhar',only_adhar_schema);