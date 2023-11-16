import mongoose from "mongoose";
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const IdSchema = new mongoose.Schema({
  unique_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: [true, "please enter Name"],
  },
  
  adhar_number_id: {
    type: String,
    unique: true,
    required: [true, "please enter adharNumber"],
  },
  pan_number_id: {
    type: String,
    unique: true,
    required: [true, "please enter pan number"],
  },
  din_number: {
    type: String,
    unique: true,
    required: [true, "please enter DIN"],
  },
  otp_phoneNr: {
    type: String,
    unique: true,
    match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
  },

  sim_number: {
    type: String,
    unique: true,
    required: [true, "please enter SIM_number"],
  },

  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },

  per_phone: {
    type: String,
    match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
  },
  mother_name: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  actor_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Actor" }],
  //forigen key maany to many relations
  //instancse.actor_ids.push('mongo id of Actor)
  //add doccuments later
  type:{
    type:String,
    enum:["ProperId","AdharOtpId","OnlyOtpId","DummyId"]
  },
  company_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Company" }],
  banker_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Banker" }],
  pdfs: [
    {
      title: String, // Title for the PDF
      pdfData: Buffer, // Store the PDF binary data
      contentType: String, // Content type of the PDF, e.g., 'application/pdf'
    },
  ],
});
export default mongoose.model("Ids", IdSchema);
