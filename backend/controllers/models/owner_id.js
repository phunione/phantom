import mongoose from "mongoose";

const owner_model = new mongoose.Schema({
    
    id:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ids',
            unique: true

        }
    ,
    type:{
        type: String,
        enum : ["ProperId","AdharOtpId","OnlyOtpId","DummyId"]
    }
      
})

export default mongoose.model('Owner', owner_model);