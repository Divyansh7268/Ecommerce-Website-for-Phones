const Favourites = require('../models/favoritesModel');
const PhoneDetails = require('../models/phoneDetailsModels');


exports.favoritesPageController = (req,res,next) =>{
Favourites.getFavourites((favourites) =>{

PhoneDetails.fetchAll((phoneDetails) =>{
 const favouriteList = favourites.map(phoneId => phoneDetails.find(phone => phone.id === phoneId)).filter(phone => phone);//yahan par ".filter" se ham jinki id define nhi hy unko remove kr rhe hy
     //is logic lo likhne ka METHOD 2 ye hy 
 //const favouriteList = phoneDetails.filter(phone => favourites.include(phone.id))

 res.render('host/favoritesListPage.ejs',{
  title : "Favourites Page",
  phoneDetails : favouriteList
 })
  })
})

}

exports.postFavoritesController = (req,res,next) =>{
  Favourites.addToFavourites(req.body.id,error =>{
  if(error){
    console.log("Error while making favourites: ",error); 
  }
   res.redirect('/favorites');
 })
 
}


exports.postFavRemoveController = (req,res,next) =>{
  const phoneId = req.params.phoneId;
  Favourites.deleteFavById(phoneId,error =>{
    if(error){
      console.log("Error in removing   ",error);
    }
    res.redirect("/favorites");
  }
  )
}