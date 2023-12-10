import Actor from "../models/actor_model.js"; // Adjust the path to your model file

export const addActor = async (req, res, next) => {
  const {
    name,
    adhar_number_id,
    pan_number_id,
    din_number,
    otp_phoneNr,
    sim_number,
    email,
    per_phone,
    mother_name,
    address,
    ids,
  } = req.body;

  const unique_actor_id = Date.now().toString();

  try {
    // Create a new PropId document
    const actorObj = new Actor({
      unique_actor_id,
      name,
      adhar_number_id,
      pan_number_id,
      din_number,
      otp_phoneNr,
      sim_number,
      email,
      per_phone,
      mother_name,
      address,
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

    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getActor = async (req, res) => {
  try {
    const { id } = req.params;

    const actor = await Actor.findById(id);

    return res.status(200).json(actor);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const update_actor_details = async (req, res) => {
  const unique = ["adhar_number_id", "pan_number_id", "din_number"];
  const { id } = req.params;
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

export const delete_actor_by_id = async (req, res) => {
  const { id } = req.params; // Assuming bankId is passed in the URL parameters

  try {
    const deletedBank = await Actor.findByIdAndDelete(id);

    if (!deletedBank) {
      return res.status(404).json({ message: "Bank not found" });
    }

    return res
      .status(200)
      .json({ message: "Bank deleted successfully", deletedBank });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting bank", error: error.message });
  }
};
// export default module = addUser
