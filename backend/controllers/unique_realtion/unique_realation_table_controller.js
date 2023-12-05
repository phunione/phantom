import UniqueRelation from "../../models/application_table/unique_relation_table.js"
import Actor from "../../models/actor_model.js"
import Banker from "../../models/banker_model.js"
import Company from "../../models/company_types/company_a_model.js"

import company_a_model from "../../models/company_types/company_a_model.js"
import Owner from "../../models/owner_id.js"
import { addActorToPropId } from "../prop_id_controller.js"
import { addActorToAdharId } from "../adhar_otp_controller.js"
import { addActorToDummyId } from "../dummy_id_controller.js"
import { addActorToOnlyId } from "../only_adhar_contoller.js"
import PropId from "../../models/prop_id.js"
import adhar_otp from "../../models/Id_types/adhar_otp.js"
import only_adhar from "../../models/Id_types/only_adhar.js"
import dummy_id from "../../models/Id_types/dummy_id.js"
//get owner details by comapny

const get_owner_details = async (req, res)=>{
    const {id} = req.params.id;
    const company = await Company.findOne({unique_id_company: id})

    if(!company){
        return res.status(404).json({
            message: "company not found"
        }) 
    }
     //find owner and if owner not found add one
     const owner = await Actor.findOne({adhar_otp_ids: company.owner_details})
     if(!owner){
        owner = await Actor.findOne({dummy_ids: company.owner_details})
     }
     if(!owner){
        owner = await Actor.findOne({only_adhar_ids: company.owner_details})
     }
     if(!owner){
        return res.status(302).json({
            message: "Actor not assigned to the Company",
        })
    
    }
     
}

//fill company information

export const fill_information = async(req,res)=>{
    const { 
    unique_id_actor ,
    unique_id_banker,
    unique_id_company,
    owner_id
} =  req.body;

    const actor = await Actor.findOne({unique_id_actor:unique_id_actor});
    const banker = await Banker.findOne({unique_id_banker:unique_id_banker});
    const company = await Company.findOne({unique_id_company:unique_id_company});
    // if(!company){
    //     company = await Company_B.findOne({unique_id_company_b:unique_id_company_b});
    // }
    const owner = Owner.findOne({unique_id_owner:owner_id})
    //check if actor , banker and owner is already in one on one relation
    const relation = await UniqueRelation.findOne({actor_id:actor._id,banker_id:banker._id,owner_id:owner._id})
    if(relation){
        return res.status(302).json({
            message: "relation already exist"
        })
    }
    const new_relation = new UniqueRelation({
        actor_id:actor._id,
        banker_id:banker._id,
        company_id:company._id,
        owner_id:owner._id
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

