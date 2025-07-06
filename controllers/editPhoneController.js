const PhoneDetails = require("../models/phoneDetailsModels");


exports.editPhoneController =(req,res,next)=>{
   const PhoneId = req.params.phoneId;
   const editing = req.query.editing === 'true'; //equal to 'true' karne se ab hame jo true milega wo ek boolean hoga
   PhoneDetails.findById(PhoneId,phone =>{
    if(!phone){
      console.log('Home Not Found');
      return res.redirect("/hostphone");
    }
    res.render('store/addEditPhone.ejs',{
    title : "Edit Details",
    // phoneDetails : [{}]  
    editing : editing,
    phone:phone,
    isLoggedIn : req.isLoggedIn
    

  })
   }) 
}



exports.editPhoneData = (req,res,next)=>{

  const {id,phoneName,phonePrice,phoneImage1,phoneImage2,phoneImage3,phoneImage4,camera,battery,processor,phoneRating,display,otherDetails,ramRom} = req.body;


   const allDetails = new PhoneDetails(phoneName,phonePrice,phoneImage1,phoneImage2,phoneImage3,phoneImage4,camera,battery,processor,phoneRating,display,otherDetails,ramRom);

  allDetails.id = id;
  allDetails.save();

  res.redirect('/hostphone');

  }
