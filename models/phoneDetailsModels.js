const fs = require('fs');
const path = require('path');
const rootDir = require('../Utils/pathUtils');
const { error } = require('console');
const Favourites = require('./favoritesModel');
const CartItem = require('./viewCartModel');


const fileDataPath = path.join(rootDir, 'data', 'dataBase.json');
const phoneDetails = [];

module.exports = class PhoneDetails {
  constructor(phoneName, phonePrice, phoneImage1, phoneImage2, phoneImage3, phoneImage4, camera, battery, processor, phoneRating, display, otherDetails, ramRom) {

    this.phoneName = phoneName,
      this.phonePrice = phonePrice,
      this.phoneImage1 = phoneImage1,
      this.phoneImage2 = phoneImage2,
      this.phoneImage3 = phoneImage3,
      this.phoneImage4 = phoneImage4,
      this.camera = camera,
      this.battery = battery,
      this.processor = processor,
      this.phoneRating = phoneRating,
      this.display = display,
      this.otherDetails = otherDetails,
      this.ramRom = ramRom
  }
  save() {
   
    PhoneDetails.fetchAll((phoneDetails) => {
        if(this.id){  //edit home case
        phoneDetails = phoneDetails.map(phone =>{
          if(phone.id === this.id){
             return this;
          }
          return phone;
        })

        }else{ //add home case
         this.id = Math.random().toString();
         phoneDetails.push(this);
        }

      
      try {
        fs.writeFileSync(fileDataPath, JSON.stringify(phoneDetails, null, 2));
      } catch (error) {
        console.log('File Writing Error', error);
      }

    })



  }
  static fetchAll(callback) {
    const fileDataPath = path.join(rootDir, 'data', 'dataBase.json');
    fs.readFile(fileDataPath, (error, data) => {
      callback(!error ? JSON.parse(data) : []);
    });
  }


  static findById(phoneId, callback) {
    this.fetchAll(phones => {
      const phoneFound = phones.find(phone => phone.id === phoneId);
      callback(phoneFound);
    })
  }

  static deleteById(phoneId,callback){
    this.fetchAll(phones => {
      phones = phones.filter(phone => phone.id !== phoneId);
      fs.writeFile(fileDataPath, JSON.stringify(phones),error =>{
        // Remove from favorites first
      Favourites.deleteFavById(phoneId, favErr => {
        // Then remove from cart
        CartItem.deleteCartById(phoneId, cartErr => {
          // Call the original callback with any error (prioritize file write error, then favErr, then cartErr)
          callback(error || favErr || cartErr);
        });
      });
      });
    })
  }
}

exports.phoneDetails = phoneDetails;
