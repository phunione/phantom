const updateDocument = async (Model ,id , updateData , res)=>{
    try {
        console.log(id)
        const updatedDocument = await Model.findByIdAndUpdate(id, updateData, { new: true });
        
        if (!updatedDocument) {
          return res.status(404).json({ success: false, message: 'Document not found' });
        }
    
        return res.status(200).json({ success: true, message: 'Document updated successfully', updatedDocument });
      } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
      }
}
export default updateDocument

//this is a generic updating functions put the id in req.querry and in req.body put the {"key":"value"} to update;
 