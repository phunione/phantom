import UniqueRelation from "../../models/application_table/unique_relation_table.js"
import Actor from "../../models/actor_model.js"
import Banker from "../../models/banker_model.js"
import Company_A from "../../models/company_types/company_a_model.js"
import Company_B from "../../models/company_types/company_b_model.js"
import company_a_model from "../../models/company_types/company_a_model.js"


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