const fs = require('fs');
const path = require('path');
const rootDir = require('../Utils/pathUtils');


const orderDataPath = path.join(rootDir, "data", "ordersData.json");


module.exports = class Orders {

  static addToOrder(phoneId,callback){
    Orders.getOrderItem((orderitem)=>{
      orderitem.push(phoneId);
      fs.writeFile(orderDataPath,JSON.stringify(orderitem),callback);
    })
  }



  static getOrderItem(callback) {
      fs.readFile(orderDataPath, (err, data) => {
        callback(!err ? JSON.parse(data) : []);
      })
    }





     static removeItemById(phoneId, callback) {
        Orders.getOrderItem(phones => {
          phones = phones.filter(id => id !== phoneId);
          fs.writeFile(orderDataPath, JSON.stringify(phones),
            callback);
        })
      }
}
