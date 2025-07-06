exports.logoutContoller = (req,res,next) =>{

  res.cookie('isLoggedIn',false);
  res.redirect('/login');
}