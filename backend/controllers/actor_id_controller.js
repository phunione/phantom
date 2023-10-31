import Actor from "../models/actor_model.js"; // Adjust the path to your model file

export const addActor = async (req, res, next) => {
  console.log(req.body);
  const {
    actor_name,
    adhar_number_id,
    pan_number_id,
    din_number_id,
    otp_phoneNr,
    sim_number_id,
    email,
    per_phone,
    mother_name,
    address_id,
    prop_ids,
    adhar_otp_ids,
    only_adhar_ids,
    dummy_ids,
  } = req.body;

  const unique_id_actor = Date.now().toString();

  try {
    // Create a new PropId document
    const actorObj = new Actor({
      unique_id_actor,
      name: actor_name,
      adhar_number_id,
      pan_number_id,
      din_number: din_number_id,
      otp_phoneNr,
      sim_number: sim_number_id,
      email,
      per_phone,
      mother_name,
      address: address_id,
      prop_ids,
      adhar_otp_ids,
      only_adhar_ids,
      dummy_ids,
    });

    // Save the document to the database
    await actorObj.save();

    return res.status(201).json({
      success: true,
      message: "Actor created successfully",
      Actor: actorObj,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

export const get_all_actors = async (req, res) => {
  try {
    // Retrieve all users from the Prop_id collection
    const users = await Actor.find();

    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

export const update_actor_details = async (req, res) => {
  const unique = ["adhar_number_id", "pan_number_id", "din_number"];
  const { id } = req.query;
  const updateData = req.body;
  try {
    const key = Object.keys(updateData)[0];
    const index = unique.indexOf(key);

    if (index !== -1) {
      const isDuplicate = await duplicateCheck(Actor, id, updateData); //this will check if the updated details already exits in the database
      if (isDuplicate) {
        return res.send({
          success: false,
          message: `Duplicate found ${updateData}`,
        });
      }
    }

    await updateDocument(Actor, id, updateData, res);
  } catch (error) {
    console.log(error);

    res.status(500).send({ success: false, message: "An error occurred" });
  }
};

// export default module = addUser
