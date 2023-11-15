import UniqueRelation from '../../models/application_table/unique_relation_table'
import actor_model from '../../models/actor_model'
import company_a_model from '../../models/company_types/company_a_model.js'
import company_b_model from '../../models/company_types/company_b_model.js'
import Banker from "../../models/banker_model.js"
import owner_id from '../../models/owner_id.js'
import PropId from '../../models/prop_id.js'
import OnlyAdhar from "../../models/only_adhar_model.js"
import DummyId from '../../models/Id_types/dummy_id.js'
import AdharOtp from '../../models/Id_types/adhar_otp.js'
// import only_adhar from '../../models/Id_types/only_adhar'om '../../models/Id_types/only_adhar'


const is_actor_already_in_company = async(actorId,companyId)=>{
    //unique actor id and unique company id is given
    try {
        const ac = await actor_model.findOne({unique_id_actor: actorId})
        if(!ac) return res.status(302).json({success:false , message : "Actor not found"})
        else{
            const cm = null;
            cm = company_a_model.findOne({unique_id_comapnyA: companyId})
            if(!cm){
                cm = company_b_model.findOne({unique_id_comapnyB: companyId})
                if(!cm) return res.status(302).json({success:false, message: "comapny not found in database"})
            }
            const rel = await UniqueRelation.findOne({actor_id:ac._id , company:cm._id})
            if(rel) return true
            else{
                return false;
            }
        }

    } catch (error) {
        if(error) return res.status(302).json({success:false,message: error.message})
    }

}

const available_actor_for_id_and_banker = async(ownerId,bankerId)=>{
    //find pre assigned actor and if not assigned then return all actors
    // const ac = actor_model.findOne({unique_id_actor:actorId})
    const ac = []
    const bc = Banker.findOne({unique_id_banker:bankerId});
    const oo = owner_id.findOne({unique_id_owner:ownerId});

    const usr_id = null;
    switch (oo.type) {
        case "ProperId":
            usr_id = await PropId.findOne({unique_id_prop:oo.prop_id})
            break;
            case "DummyId":
            usr_id = await DummyId.findOne({unique_id_dummy:oo.dummy_id})

            
            break;
            case "AdharOtpId":
                usr_id = await AdharOtp.findOne({unique_id_adhar:oo.adhar_otp_id})
            
            break;
            case "OnlyAdhar":
                usr_id = await OnlyAdhar.findOne({unique_id_only:oo.only_adhar_id})

            break;
    
        default:
            break;
    }



    const Arr = await UniqueRelation.find({owner_id: ownerId,banker_id: bankerId})
    if(!Arr) Arr = await actor_model.find();
    return Arr
} 