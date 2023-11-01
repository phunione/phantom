import OnlyAdhar from "../models/Id_types/only_adhar";
import Actor from '../models/actor_model.js';
import duplicateCheck from './genericFunctions/duplicateCheck.js';
import updateDocument from "./genericFunctions/updateDocument.js"
import Owner from "../models/owner_id.js"
import { add_pdfs } from "./genericFunctions/addpdf";
const unique = ["adhar_number_id","pan_numeber_id","din_number","email","address"]
export const addUsertoOnly = async (req, res,next) => {
  const {
        unique_id_only,
        name,
        adhar_number_id,
        pan_numeber_id,
        din_number,
        mother_name,
        address,
        actor_ids,
        company_ids,
        banker_ids
  } = req.body;

  var arr = PropId.find({adhar_number_id :  adhar_number_id});
  if(arr.size() > 0){
    res.send("User Already exists.")
  }


  try {
    // Create a new PropId document
    const newProp = new OnlyAdhar({
        unique_id_only,
        name,
        adhar_number_id,
        pan_numeber_id,
        din_number,
        mother_name,
        address,
        actor_ids,
        company_ids,
        banker_ids
    });

    // Save the document to the database
    await newProp.save();
    const newUser = OnlyAdhar.findOne({unique_id_only:unique_id_only});
    const newOwner = new Owner({
      only_adhar_id: newUser._id,
      type: "OnlyAdharId"
    })
    newOwner.save();

    return res.status(201).json({ success: true, message: 'PropId created successfully', prop: newProp });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
 // Adjust the path to your model file

export const addActorToOnlyId = async (req, res) => {
  const { onlyid, actorId } = req.body;
  try {
    // Retrieve the existing onlyAdhar document based on _id
    const existingOnlyId = await OnlyAdhar.find({unique_id_only : onlyid});
    const existingActorId = await Actor.find({unique_id_actor:  actorId});
    if (!existingOnlyId) {
      return res.status(404).json({ success: false, message: 'onlyAdhar not found' });
    }
    if (!existingActorId) {
      return res.status(404).json({ success: false, message: 'onlyAdhar not found' });
    }
    console.log("Actor Id",existingActorId[0]._id)

    // Push the new Actor ID into the actor_ids array
    existingOnlyId[0].actor_ids.push(existingActorId[0]._id);
    existingActorId[0].onlyAdhars.push(existingOnlyId[0]._id);
    // Save the updated document
    await existingOnlyId[0].save();
    await existingActorId[0].save();
    return res.status(200).json({ success: true, message: 'Actor ID added to actor_ids', propId: existingOnlyId });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ success: false, error: error });
  }
};

export const get_only_adhar_users = async (req,  res)=>{
  try {
    // Retrieve all users from the onlyAdhar collection
    const users = await PropId.find();

    return res.status(200).json({ success: true, users });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
}

//this can update multiple details at same time
export const update_only_adhar_details = async (req,res) =>{
  const { id } = req.query;
  const updateData = req.body;
  try {
    const key = Object.keys(updateData)[0];
    const index = unique.indexOf(key);

    if (index !== -1) {
      const isDuplicate = await duplicateCheck(OnlyAdhar, id, updateData);//this will check if the updated details already exits in the database
       
      if (isDuplicate) {
          return res.send({ success: false, message: `Duplicate found ${updateData}` });
      }
  }

  await updateDocument(OnlyAdhar, id, updateData, res);
} catch (error) {
  console.log(error);
  res.status(500).send({ success: false, message: 'An error occurred' });
}

}

export const adfs = async(req,res)=>{ 
  //req.body will conatian path of the pdf in the following format
  //push path of the pdf_file
  const id = req.query;
  const path = req.body;
  await add_pdfs(id,path,OnlyAdhar);


}















// export default module = addUser