const { check, validationResult } = require("express-validator");

exports.signInController =(req,res,next)=>{

  res.render("auth/signInPage.ejs",{
    title : "Sign In",
    errors : [],
    oldInput : {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      }
  })
};


exports.signInPostController = [
  //FIST NAME
  check("firstName")
  .trim()
  .isLength({min:2})
  .withMessage("Fist name should be atleast 2 characters")
  .matches(/^[A-Za-z\s]+$/) //iska mtlb hy sirf alphabets hone chaiye aur '+'ka matlb hota hy minimum ek character hona chaiye
  .withMessage("First name contain alphabets"),
   
   //LAST NAME (last name ko optional rakh rhe hy isliye jada validations nhi hy)
  check("lastName")
  .matches(/^[A-Za-z\s]*$/) //'*' ka mtlb hota hy minimum 0 charcter bhi ho sakte hy
  .withMessage("Last name contain alphabets"),

  //EMAIL
  check("email")
  .isEmail()
  .withMessage("Please enter valid email")
  .normalizeEmail(),
  
  //PASSWORD
  check("password")
  .isLength({min:8})
  .withMessage("Password should be atleast 8 characters")
  .matches(/[A-Z]/)
  .withMessage("1 Upper character is required")
  .matches(/[a-z]/)
  .withMessage("1 Lower character is required")
  .matches(/[0-9]/)
  .withMessage("1 Number is required ")
  .matches(/[!@#$%^&*(){},.]/)
  .withMessage("Select atleast 1 special character from this !@#$%^&*(){},. ")
  .trim(),
 
   //Confirm Password
   check("confirmPassword")
   .trim()
   .custom((value ,{req}) =>{
    if(value !== req.body.password){
      throw new Error("Confirm password not matched with password");
    }
    return true;
   }),

   //User Type
   check("userType")
   .notEmpty()
   .withMessage("Please select user type")
   .isIn(['guest','host']),

   //Terms and Conditions
   check("terms")
   .notEmpty()
   .withMessage("Please accept terms and conditions")
   .custom((value,{req}) =>{
    if(value !== "on"){
      throw new Error("Please accept terms and conditions");
    }
    return true;
   }),




  (req,res,next) =>{
   const {firstName,lastName,email,password,userType} = req.body;
   const errors = validationResult(req); //yahan se errors nikal lete hy 
   if(!errors.isEmpty()){ //agar error hue
    return res.status(422).render("auth/signInPage.ejs",{ //tab ham is page pr render kar denge
      title : "Sign In",
      currentPage : "Sign In",
      isLoggedIn : false,
      errors : errors.array().map(err => err.msg), //yahan se error ka msg chala jayega
      oldInput : {firstName,lastName,email,password} //yahan se baki details prefil ho jygi
    })
   }



   console.log(req.body);
  res.redirect('/login'); //agar error empty hue to login par chala jayega
}];