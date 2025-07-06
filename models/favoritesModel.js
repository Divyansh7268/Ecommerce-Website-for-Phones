const fs = require('fs');
const path = require('path');
const rootDir = require('../Utils/pathUtils');

const favouritesDataPath = path.join(rootDir,"data","favorites.json");  

module.exports = class Favourites {
  static addToFavourites(phoneId,callback){
   Favourites.getFavourites((favorites)=>{
    if(favorites.includes(phoneId)){
      callback("Phone is already in favourite list");
      
    }else{
      favorites.push(phoneId);
      fs.writeFile(favouritesDataPath,JSON.stringify(favorites),callback);
    }
   })
  }


  static getFavourites (callback){
    fs.readFile(favouritesDataPath ,(err,data)=>{
      callback(!err  ? JSON.parse(data) : []);
    })
  }



  static deleteFavById(phoneId,callback){
  
  Favourites.getFavourites(phones =>{
      phones = phones.filter(id => id !== phoneId);
      fs.writeFile(favouritesDataPath, JSON.stringify(phones),callback);
    })
  }
}