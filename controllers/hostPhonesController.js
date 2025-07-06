const PhoneDetails = require("../models/phoneDetailsModels")

exports.hostPhonesController = (req,res,next)=>{
  PhoneDetails.fetchAll(phoneDetails =>{
    res.render('host/hostPhones.ejs',{
      title : "Host Phones",
      phoneDetails : phoneDetails,
      isLoggedIn : req.isLoggedIn
    })
  })
}