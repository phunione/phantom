import Banker from '../models/banker_model.js'; // Assuming you have a "Banker" model defined
import BankerEmployee from "../models/bank_employee_model.js"
const createBanker = async (req, res) => {
  try {
    const { unique_banker_employee_id, name, banker_ids } = req.body;

    const newBanker = new BankerEmployee({
      unique_banker_employee_id,
      name,
      banker_ids
    });

    const savedBanker = await newBanker.save();
    res.status(201).json(savedBanker);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while creating the banker.' });
  }
};

const add_banker_employee_ids = async(req, res)=>{
    const { banker_id,banker_employee_id } = req.body;
    try {
        //check if bank_emplioyee already have banker
        const existingBankerEmployee = await BankerEmployee.find({unique_banker_employee_id: banker_employee_id});
        if(existingBankerEmployee){
            if(existingBankerEmployee.banker_id === null){
                await updateDocument(BankerEmployee,existingBankerEmployee[0]._id,{banker_id:banker_id})
                //find existing banker in the database
                const banker_list = await Banker.findOne({unique_banker_id: banker_id})


                //before adding emplyer to banker check if there is already this banker_employee exists
                if(banker_list.findOne({banker_employee_ids : existingBankerEmployee[0]._id})){
                    return res.status(400).json({success:false,message:"Employee already have a banker"})
                }
                else{
                    banker_list.banker_employee_ids.push(existingBankerEmployee[0]._id)
                }
            }
            else{
                return res.status(400).json({success:false,message:"Employee already have a banker"})
            }
        }
    }
    catch(error){
        return res.status(500).json({success:false,error:error.message})
        
    }
}


export { createBanker,add_banker_employee_ids };