exports.loginController =(req,res,next)=>{
  res.render("auth/loginPage.ejs",{
    title : "Login",
    isLoggedIn : false
  })
}

exports.postLoginController = (req,res,next)=>{
  console.log(req.body);
  res.cookie("isLoggedIn",true);
  res.redirect("/");
}
