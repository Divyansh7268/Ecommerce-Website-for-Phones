const PhoneDetails = require('../models/phoneDetailsModels');

exports.AllPhoneData = (req,res,next)=>{

  console.log('Form Data',req.body);


  const {phoneName,phonePrice,phoneImage1,phoneImage2,phoneImage3,phoneImage4,camera,battery,processor,phoneRating,display,otherDetails,ramRom} = req.body;


   const allDetails = new PhoneDetails(phoneName,phonePrice,phoneImage1,phoneImage2,phoneImage3,phoneImage4,camera,battery,processor,phoneRating,display,otherDetails,ramRom);

  allDetails.save();

  res.render('store/submit.ejs',{
     title : 'Submit',
     isLoggedIn : req.isLoggedIn
   });

  }

