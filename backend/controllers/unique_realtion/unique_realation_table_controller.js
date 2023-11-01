import UniqueRelation from "../../models/application_table/unique_relation_table.js"
import Actor from "../../models/actor_model.js"
import Banker from "../../models/banker_model.js"
import Company_A from "../../models/company_types/company_a_model.js"
import Company_B from "../../models/company_types/company_b_model.js"
import company_a_model from "../../models/company_types/company_a_model.js"
import Owner from "../../models/owner_id.js"

//get owner details by comapny

const get_owner_details = async (req, res)=>{
    const {id} = req.params.id;
    const company = await Company_A.findOne({unique_id_company_a: id})
    if(!company){
        company = await Company_B.findOne({unique_id_company_b: id})
    }
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

const fill_information = async(req,res)=>{
    const { unique_id_actor ,
    unique_id_banker,
    unique_id_company_a,
    unique_id_company_b,
    owner_id
} =  req.body;

    const actor = await Actor.findOne({unique_id_actor:unique_id_actor});
    const banker = await Banker.findOne({unique_id_banker:unique_id_banker});
    const company = await Company_A.findOne({unique_id_company_a:unique_id_company_a});
    if(!company){
        company = await Company_B.findOne({unique_id_company_b:unique_id_company_b});
    }
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
    return res.status(200).json({
        message: "relation added"
    })
    
}

