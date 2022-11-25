"use strict";

var express = require('express');

var port = 3000;
var app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express["static"]('static'));

var indexPage = require("./routes/mainpage");

var insertPage = require("./routes/insertProducts");

var showPage = require("./routes/showProducts");

app.use("/", indexPage);
app.use("/insert", insertPage.router);
app.use("/show", showPage);
app.listen(port, function (err) {
  console.log("Server is work on ".concat(port));
});
/*--> 2 routes 

  /insertproducts  (get route)
   Pname :  
   Price : 
   Quantity :
   Image Url :  texturl 
     Submit (action /showproducts  method post)

    /showproducts (post route)
     Product Details 
    Cart Formet 

*/