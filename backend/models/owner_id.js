import mongoose from "mongoose";

const owner_model = new mongoose.Schema({
    prop_id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Prop_id',
            unique: true
        }
    ,
    adhar_otp_id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Adhar_id',
            unique: true

        }
    ,
    only_adhar_id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'OnlyAdhar',
            unique: true

        }
    ,
    dummy_id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DummyId',
            unique: true

        }
    ,
    type:{
        type: String,
        enum : ["ProperId","AdharOtpId","OnlyOtpId","DummyId"]
    }
      
})

export default mongoose.model('Owner', owner_model);