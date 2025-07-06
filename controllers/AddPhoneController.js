
exports.addPhoneController = (req,res,next) =>{
  res.render('store/addEditPhone.ejs',{
    title : "Add Phones",
    phoneDetails : [{}],
    editing : false,
    isLoggedIn : req.isLoggedIn
  })
};