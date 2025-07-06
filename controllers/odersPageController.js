const PhoneDetails = require("../models/phoneDetailsModels")
const Orders = require("../models/orderDetailsModel");

exports.orderItemListController =(req,res,next)=>{
Orders.getOrderItem((orderitem) =>{
PhoneDetails.fetchAll((phones)=>{
const orderItemList = phones.filter(phone => orderitem.includes(phone.id));
  res.render('host/yourOdersPage',{
    title : "Your Orders",
    phoneDetails : orderItemList
  })
 })
})
}

exports.postOrderItem = (req,res,next) =>{
  console.log("POST /order body:", req.body);
  Orders.addToOrder(req.body.id,error =>{
  if(error){
    console.log("Error while placing order: ",error); 
  }
   res.redirect('/order');
 })
}


exports.postCancelItem = (req,res,next)=>{
  const phoneId = req.params.phoneId;
   Orders.removeItemById(phoneId,error =>{
    if(error){
      console.log("Error in canceling  item ",error);
    }
    res.redirect("/order");
  }
  )
}