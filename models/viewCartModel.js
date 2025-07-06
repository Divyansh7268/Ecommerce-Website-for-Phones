const fs = require('fs');
const path = require('path');
const rootDir = require('../Utils/pathUtils');

const cartDataPath = path.join(rootDir, "data", "cartData.json");

module.exports = class CartItem {
  static addToCart(phoneId, callback) {
    CartItem.getCartItem((cartitem) => {
      if (cartitem.includes(phoneId)) {
        callback("Phone is already in favourite list");

      } else {
        cartitem.push(phoneId);
        fs.writeFile(cartDataPath, JSON.stringify(cartitem), callback);
      }
    })
  }
    
    
  static getCartItem(callback) {
    fs.readFile(cartDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    })
  }


  static deleteCartById(phoneId, callback) {
    CartItem.getCartItem(phones => {
      phones = phones.filter(id => id !== phoneId);
      fs.writeFile(cartDataPath, JSON.stringify(phones),
        callback);
    })
  }
}


