const PhoneDetails = require("../models/phoneDetailsModels")

exports.fullPhoneDetailscontroller = (req, res, next) => {
  const PhoneId = req.params.phoneId;
  PhoneDetails.fetchAll(phoneDetails => {
    const phone = phoneDetails.find(phone => phone.id === PhoneId);
    res.render('store/fullPhoneDetails.ejs', {
      title: "Phone Details",
      phoneDetails: [phone], // or just phone if you want a single object
      isLoggedIn : res.locals.isLoggedIn
    });
  });
}

