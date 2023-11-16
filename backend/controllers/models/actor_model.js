import mongoose from "mongoose";
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const actor_schema = new mongoose.Schema({
  unique_id_actor: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: [true, "please enter Name"],
  },
  adhar_number_id: {
    type: String,
    required: [true, "please enter adharNumber"],
  },
  pan_number_id: {
    type: String,
    required: [true, "please enter pan number"],
  },
  din_number: {
    type: String,
    required: [true, "please enter DIN"],
  },
  otp_phoneNr: {
    type: String,
    match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
  },
  sim_number: {
    type: String,
    required: [true, "please enter SIM_number"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email address is required"],
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
  bank_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bank",
    },
  ],
  banker_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Banker",
    },
  ],
  ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ids",
    },
  ],

  //add multiple forigen keys after the bank and banker id is made
  //instancse.actor_ids.push('mongo id of Actor)
  //add doccuments later
});
export default mongoose.model("Actor", actor_schema);
