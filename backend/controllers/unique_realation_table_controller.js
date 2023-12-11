import UniqueRelation from "../models/unique_relation_table.js"
import Actor from "../models/actor_model.js"
import Banker from "../models/banker_model.js"
import Company from "../models/company.js"
import IdSchema from "../models/ids.js"

//get owner details by comapny

export const get_owner_details = async (req, res)=>{
    const {id} = req.params.id;
    const company = await Company.findOne({unique_id_company: id})

    if(!company){
        return res.status(404).json({
            message: "company not found"
        })
    }
     //find owner and if owner not found add one
     //show ids connected to company
     //name of id

}

//fill company information

export const fill_information = async(req,res)=>{
    const { 
    unique_id_actor ,
    unique_id_banker,
    unique_id_company,
    unique_id
} =  req.body;

    const actor = await Actor.findOne({unique_id_actor:unique_id_actor});
    const banker = await Banker.findOne({unique_id_banker:unique_id_banker});
    const company = await Company.findOne({unique_id_company:unique_id_company});
    const owner = IdSchema.findOne({unique_id:unique_id})
    //check if actor , banker and owner is already in one on one relation
    const relation = await UniqueRelation.findOne({actor_id:actor._id,banker_id:banker._id,unique_id:unique_id._id})
    if(relation){
        return res.status(302).json({
            message: "relation already exist"
        })
    }
    const new_relation = new UniqueRelation({
        actor_id:actor._id,
        banker_id:banker._id,
        company_id:company._id,
        ids:owner._id
    })
    

    await new_relation.save()
    //add actor in id and id in actor and actor in comapny
    // switch (owner.type) {
    //     case "ProperId":
    //         // const usr = await PropId.findById({owner.prop_id})
            
    //     break;
    //         case "AdharOtpId":
            
    //         break;
    //         case "OnlyOtpId":
            
    //         break;
    //         case "DummyId":
            
    //         break;
    
    //     default:
    //         break;
    // }
    return res.status(200).json({
        message: "relation added"
    })
    
}

export const get_all = async (req, res) => {
    try {
        const rem = await UniqueRelation.find();
        return res.status(200).json(rem);
    } catch (error) {
        return res.status(400).json(error);
    }
}

