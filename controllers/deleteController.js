const PhoneDetails = require('../models/phoneDetailsModels');

exports.postDeleteController = (req,res,next) =>{
  const phoneId = req.params.phoneId;
  PhoneDetails.deleteById(phoneId,error =>{
    if(error){
      console.log("Error in deleting",error);
    }
    res.redirect("/");
  }
  )
}