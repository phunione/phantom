import PropId from "../models/Id_types/prop_id.js"; // Adjust the path to your model file
import Actor from "../models/actor_model.js";
import duplicateCheck from "./genericFunctions/duplicateCheck.js";
import updateDocument from "./genericFunctions/updateDocument.js";
import OwnerId from "../models/owner_id.js";
import { add_pdfs } from "../controllers/genericFunctions/addpdf.js";

const unique = [
  "adhar_number_id",
  "pan_numeber_id",
  "din_number",
  "email",
  "address",
];
export const addUsertoProp = async (req, res, next) => {
  const {
    unique_id_prop,
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
    actor_ids,
    pdfs,
  } = req.body;

  var arr = PropId.find({ adhar_number_id: adhar_number_id });
  if (arr.size() > 0) {
    res.send("User Already exists.");
  }

  try {
    // Create a new PropId document
    const newProp = new PropId({
      unique_id_prop,
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
      actor_ids,
      pdfs,
    });

    // Save the document to the database
    await newProp.save();

    const newUser = PropId.findOne({ unique_id_prop: unique_id_prop });
    const newOwner = new OwnerId({
      prop_id: newUser._id,
      type: "ProperId",
    });
    newOwner.save();

    return res
      .status(201)
      .json({
        success: true,
        message: "PropId created successfully",
        prop: newProp,
      });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
// Adjust the path to your model file

export const addActorToPropId = async (req, res) => {
  const { propId, actorId } = req.body;
  try {
    // Retrieve the existing Prop_id document based on _id
    const existingPropId = await PropId.find({ unique_id_prop: propId });
    const existingActorId = await Actor.find({ unique_id_prop: actorId });
    if (!existingPropId) {
      return res
        .status(404)
        .json({ success: false, message: "Prop_id not found" });
    }
    if (!existingActorId) {
      return res
        .status(404)
        .json({ success: false, message: "Prop_id not found" });
    }
    console.log("Actor Id", existingActorId[0]._id);

    // Push the new Actor ID into the actor_ids array
    existingPropId[0].actor_ids.push(existingActorId[0]._id);
    existingActorId[0].prop_ids.push(existingPropId[0]._id);
    // Save the updated document
    await existingPropId[0].save();
    await existingActorId[0].save();
    return res
      .status(200)
      .json({
        success: true,
        message: "Actor ID added to actor_ids",
        propId: existingPropId,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error });
  }
};

export const get_prop_users = async (req, res) => {
  try {
    // Retrieve all users from the Prop_id collection
    const users = await PropId.find();

    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

//this can update multiple details at same time
export const update_prop_details = async (req, res) => {
  const { id } = req.query;
  const updateData = req.body;
  try {
    const key = Object.keys(updateData)[0];
    const index = unique.indexOf(key);

    if (index !== -1) {
      const isDuplicate = await duplicateCheck(PropId, id, updateData); //this will check if the updated details already exits in the database

      if (isDuplicate) {
        return res.send({
          success: false,
          message: `Duplicate found ${updateData}`,
        });
      }
    }

    await updateDocument(PropId, id, updateData, res);
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "An error occurred" });
  }
};

export const adfs = async (req, res) => {
  //req.body will conatian path of the pdf in the following format
  //push path of the pdf_file
  const id = req.query;
  const path = req.body;
  await add_pdfs(id, path, PropId);
};

// export default module = addUser
