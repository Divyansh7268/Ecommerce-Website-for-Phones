const PhoneDetails = require("../models/phoneDetailsModels")
const CartItem = require("../models/viewCartModel")

exports.viewCartController = (req,res,next) =>{
CartItem.getCartItem((cartitem) =>{
PhoneDetails.fetchAll((phoneDetails) =>{
 const cartItemList = cartitem.map(phoneId => phoneDetails.find(phone => phone.id === phoneId))

 res.render('store/viewCartPage.ejs',{
      phoneDetails : cartItemList,
      title : "Your Cart"
    });
  })
})
}






exports.postCartItem = (req,res,next) =>{
  CartItem.addToCart(req.body.id,error =>{
  if(error){
    console.log("Error while making favourites: ",error); 
  }
   res.redirect('/viewcart');
 })
}

exports.postRemoveCartItem = (req,res,next) =>{
  const phoneId = req.params.phoneId;
  CartItem.deleteCartById(phoneId,error =>{
    if(error){
      console.log("Error in removing  cart item ",error);
    }
    res.redirect("/viewcart");
  }
  )
}
