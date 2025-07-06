//Internal Modules
const express = require('express');
const path = require('path');

//External Modules
const {homePageRouter} = require('./routes/homePageRouter');
const {addPhoneRouter} = require('./routes/addPhoneRouter');
const { submitRouter } = require('./routes/submitRouter');
const { fullPhoneDetialRouter } = require('./routes/fullPhoneDetailRouter');
const { hostPhonesRouter } = require('./routes/hostPhonesRouter');
const { editPhoneRouter } = require('./routes/editPhoneRouter');
const { loginRouter } = require('./routes/loginRouter');
const { logoutRouter } = require('./routes/logoutRouter');
const { signInPageRouter } = require('./routes/signInPageRouter');
const { deletePhoneRouter } = require('./routes/deletePhoneRouter');
const { favoritesPageRouter } = require('./routes/favoritesPageRouter');
const { viewCartRouter } = require('./routes/viewCartRouter');
const { orderPageRouter } = require('./routes/orderPageRouter');
const rootDir = require('./Utils/pathUtils');
const { title } = require('process');
const { aboutPageRouter } = require('./routes/aboutPageRouter');














const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use((req,res,next)=>{
  console.log(req.url,req.method);
  next();
});

//For Fix path of main file
app.use(express.static(path.join(rootDir,'public')));
//decoding Url
app.use(express.urlencoded({extended : true}));
//login middleware
app.use((req,res,next)=>{
  req.isLoggedIn = req.get('Cookie')?.split('=')[1] || false;
  console.log(req.isLoggedIn);
  next();
})
//homePageRouter Import
app.use(homePageRouter);
//addPhoneRouter Import
app.use(addPhoneRouter);
//submitRouter Import
app.use(submitRouter);
//full Phone Details Router
app.use(fullPhoneDetialRouter);
//host router
app.use(hostPhonesRouter);
//Edit Router
app.use(editPhoneRouter);
//login Page handling
app.use(loginRouter);
//logout router
app.use(logoutRouter);
//Sign In router
app.use(signInPageRouter);
//Delete handling
app.use(deletePhoneRouter);
//Favorites Page Handling
app.use(favoritesPageRouter); 
//viewCart handling
app.use(viewCartRouter);
//orderHandling
app.use(orderPageRouter);
//about page
app.use(aboutPageRouter);
//error handling
app.use((req,res,next)=>{
  res.status(404).render('host/errorPage.ejs',{
    title : "Error",
    isLoggedIn : req.isLoggedIn
  })
})




//Server Start Code
const PORT =3000;
app.listen(PORT,()=>{
  console.log(`http://localhost:${PORT}`);
});
