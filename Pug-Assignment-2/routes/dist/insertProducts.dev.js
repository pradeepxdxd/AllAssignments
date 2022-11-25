"use strict";

var productArray = [];

var express = require('express');

var router = express.Router();
router.get("/", function (req, res) {
  res.render("insert-page.pug");
});
router.post("/product-data", function (req, res) {
  var obj = {
    pname: req.body.pname,
    price: req.body.price,
    qun: req.body.qun,
    imgurl: req.body.imgurl
  };
  productArray.push(obj); // console.log(`${pname} ${price} ${qun} ${imgurl}`);

  res.send("<h1> Your Data Successfully added </h1>");
});
router.get("/show-array", function (req, res) {
  for (var data in productArray) {
    console.log(productArray[data]);
  }

  res.send("<h1> Show data </h1>");
});
router.get("/clear-array", function (req, res) {
  productArray = [];
  res.send("<h1> clear data </h1>");
});
module.exports = {
  router: router,
  pArray: productArray
};