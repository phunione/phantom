

import Adhar_id from '../models/Id_types/adhar_otp.js'; // Adjust the path to your model file
import Actor from '../models/actor_model.js';
import duplicateCheck from './genericFunctions/duplicateCheck.js';
import updateDocument from "./genericFunctions/updateDocument.js"


const unique = ["adhar_number_id","pan_numeber_id","din_number","email","address"]
export const add_adhar_user = async (req, res,next) => {
  const {
    unique_id_adhar,
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
    company_ids,
    banker_ids
  } = req.body;

  var arr = Adhar_id.find({adhar_number_id :  adhar_number_id});
  if(arr.size() > 0){
    res.send("User Already exists.")
  }


  try {
    // Create a new PropId document
    const newProp = new Adhar_id({
      unique_id_adhar,
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
      company_ids,
      banker_ids
    });

    // Save the document to the database
    await newProp.save();
 
    return res.status(201).json({ success: true, message: 'adhar_otp_id created successfully', prop: newProp });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
 // Adjust the path to your model file

export const addActorToAdharId = async (req, res) => {
  const { adhar_id, actorId } = req.body;
  try {
    // Retrieve the existing Prop_id document based on _id
    const existingAdharId = await Adhar_id.find({unique_id_adhar : adhar_id});
    const existingActorId = await Actor.find({unique_id_actor:  actorId});
    if (!existingAdharId) {
      return res.status(404).json({ success: false, message: 'adhar_id not found' });
    }
    if (!existingActorId) {
      return res.status(404).json({ success: false, message: 'actor_id not found' });
    }
    console.log("Actor Id",existingActorId[0]._id)

    // Push the new Actor ID into the actor_ids array
    existingAdharId[0].actor_ids.push(existingActorId[0]._id);
    existingActorId[0].adhar_otp_ids.push(existingAdharId[0]._id);
    // Save the updated document
    await existingAdharId[0].save();
    await existingActorId[0].save();
    return res.status(200).json({ success: true, message: 'Actor ID added to actor_ids', adharId: existingAdharId });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, error: error,  message:  `error in addActorToAdharId`});
  }
};

export const get_adhar_users = async (req,  res)=>{
  try {
    // Retrieve all users from the Prop_id collection
    const users = await Adhar_id .find();

    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
}

//this can update multiple details at same time

export const update_adhar_details = async (req,res) =>{
    const { id } = req.query;
    const updateData = req.body;
    try {
        const key = Object.keys(updateData)[0];
        const index = unique.indexOf(key);

    if (index !== -1) {
        const isDuplicate = await duplicateCheck(Adhar_id, id, updateData);//this will check if the updated details already exits in the database

        if (isDuplicate) {
            return res.send({ success: false, message: `Duplicate found ${updateData}` });
        }
    }
    
    await updateDocument(Adhar_id, id, updateData, res);

} catch (error) {

    console.log(error);

    res.status(500).send({ success: false, message: 'An error occurred' })

    }

}










// export default module = addUser