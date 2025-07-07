const PhoneDetails = require("../models/phoneDetailsModels");


exports.homeController = (req,res,next) =>{
  PhoneDetails.fetchAll(phoneDetails =>{
  res.render('host/HomePage.ejs',{
  title : "MobileShop",
  phoneDetails : phoneDetails,
  isLoggedIn : res.locals.isLoggedIn
  });

  })

 
};