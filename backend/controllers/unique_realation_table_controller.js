import UniqueRelation from "../models/unique_relation_table.js";
import Company from "../models/company.js";

//get owner details by comapny

export const get_owner_details = async (req, res) => {
  const { id } = req.params;
  const company = await Company.findOne({ unique_id_company: id });

  if (!company) {
    return res.status(404).json({
      message: "company not found",
    });
  }
  //find owner and if owner not found add one
  //show ids connected to company
  //name of id
};

//fill company information

export const fill_information = async (req, res) => {
  const { actor_id, banker_id, company, type, id } = req.body;

  //check if actor , banker and owner is already in one on one relation
  const relation = await UniqueRelation.findOne({
    actor_id: actor_id._id,
    banker_id: banker_id._id,
    ids: company._id,
  });
  if (relation) {
    return res.status(400).json({
      message: "relation already exist",
    });
  }
  const new_relation = new UniqueRelation({
    actor_id: actor_id._id,
    banker_id: banker_id._id,
    company_id: company._id,
    company_type: type,
    ids: id._id,
  });

  await new_relation.save();
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
    message: "relation added",
  });
};

export const get_all = async (req, res) => {
  try {
    const rem = await UniqueRelation.find();
    return res.status(200).json(rem);
  } catch (error) {
    return res.status(400).json(error);
  }
};
