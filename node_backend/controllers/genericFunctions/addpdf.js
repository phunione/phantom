import fs from 'fs';

export const add_pdfs = async(id,path,Model)=>{ 
    //req.body will conatian path of the pdf in the following format
    //push path of the pdf_file
    const pdfBuffer1 = fs.readFileSync(path);
    const pdfObject = {
      title: `${Date.now()} ${id}`,
      pdfData: pdfBuffer1,  // The binary data of the first PDF
      contentType: 'application/pdf',
  }
  Model.findOne({unique_id_prop : id},(err,doccument)=>{
    if (err) {
      console.error(err);
      res.status(404).json({success: false, message: "error in pdf_contoller"})
  } else if (document) {
      // Push the PDF object into the pdfs array
      document.pdfs.push(pdfObject);
  
      // Save the document with the updated pdfs array
      document.save()
          .then((savedDocument) => {
              console.log('PDF added to the document:', savedDocument);
              res.status(200).json({success: true, message:"pdf saved"})
          })
          .catch((err) => {
              // Handle the save error
      res.status(404).json({success: false, message: "error in pushing pdf"})
  
              console.error(err);
          });
  } else {
      // Handle the case where the document is not found
      console.error('Document not found');
      res.status(404).json({success: false, message: "id not found"});
  
  }
  })
  
  }
  