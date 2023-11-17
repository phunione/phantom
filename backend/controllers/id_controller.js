import IdSchema from "../models/ids.js"; // Adjust the path to your model file
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
export const addUsertoId = async (req, res, next) => {
  const {
    id_name,
    adhar_number_id,
    pan_number_id,
    din_number,
    otp_phoneNr,
    sim_number,
    email,
    per_phone,
    mother_name,
    address,
    actor_ids,
    type,
    company_ids,
    banker_ids,
    pdfs,
  } = req.body;

  var arr = IdSchema.find({ adhar_number_id: adhar_number_id, type: type });
  if (arr.size() > 0) {
    res.send("User Already exists.");
  }

  const unique_id = Date.now().toString();

  try {
    // Create a new PropId document
    const newId = new IdSchema({
      unique_id,
      name: id_name,
      adhar_number_id,
      pan_number_id,
      din_number,
      otp_phoneNr,
      sim_number,
      email,
      per_phone,
      mother_name,
      address,
      actor_ids,
      type,
      company_ids,
      banker_ids,
      pdfs,
    });

    // Save the document to the database
    await newId.save();

    const newUser = IdSchema.findOne({ unique_id: unique_id });
    const newOwner = new OwnerId({
      id: newUser._id,
      type: type,
    });
    newOwner.save();

    return res.status(201).json({
      success: true,
      message: `id of type ${type} created`,
      usr: newId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
// Adjust the path to your model file

export const addActorToId = async (req, res) => {
  const { unique_id, actorId } = req.body;
  try {
    // Retrieve the existing Prop_id document based on _id
    const existingId = await IdSchema.find({ unique_id: unique_id });
    const existingActorId = await Actor.find({ unique_id_prop: actorId });
    if (!existingId) {
      return res.status(404).json({ success: false, message: "id not found" });
    }
    if (!existingActorId) {
      return res.status(404).json({ success: false, message: "id not found" });
    }
    console.log("Actor Id", existingActorId[0]._id);

    // Push the new Actor ID into the actor_ids array
    existingId[0].actor_ids.push(existingActorId[0]._id);
    existingActorId[0].prop_ids.push(existingPropId[0]._id);
    // Save the updated document
    await existingPropId[0].save();
    await existingActorId[0].save();
    return res.status(200).json({
      success: true,
      message: "Actor ID added to actor_ids",
      propId: existingPropId,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error });
  }
};

export const get_ids = async (req, res) => {
  try {
    // Retrieve all users from the Prop_id collection
    const { type } = req.body;
    const users = await Id.find({ type: type });

    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
};

//this can update multiple details at same time
export const update_details = async (req, res) => {
  const { id } = req.query;
  const updateData = req.body;
  try {
    const key = Object.keys(updateData)[0];
    const index = unique.indexOf(key);

    if (index !== -1) {
      const isDuplicate = await duplicateCheck(IdSchema, id, updateData); //this will check if the updated details already exits in the database

      if (isDuplicate) {
        return res.send({
          success: false,
          message: `Duplicate found ${updateData}`,
        });
      }
    }

    await updateDocument(IdSchema, id, updateData, res);
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
  await add_pdfs(id, path, IdSchema);
};

// export default module = addUser
