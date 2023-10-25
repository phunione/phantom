


import Actor from '../models/actor_model.js'; // Adjust the path to your model file

export const addActor = async (req, res,next) => {
  console.log(req.body)
  const {
    unique_id_actor,
    name,
    adhar_number_id,
    pan_numeber_id,
    din_number,
    otp_phoneNr,
    sim_number,
    email,
    per_phone,
    mother_name,
    address,
    prop_ids,
    adhar_otp_ids,
    only_adhar_ids,
    dummy_ids
  } = req.body;

  try {
    // Create a new PropId document
    const newProp = new Actor({
      unique_id_actor,
      name,
      adhar_number_id,
      pan_numeber_id,
      din_number,
      otp_phoneNr,
      sim_number,
      email,
      per_phone,
      mother_name,
      address,
      prop_ids,
      adhar_otp_ids,
      only_adhar_ids,
      dummy_ids
    });

    // Save the document to the database
    await newProp.save();

    return res.status(201).json({ success: true, message: 'PropId created successfully', Actor: newProp });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};





// export default module = addUser