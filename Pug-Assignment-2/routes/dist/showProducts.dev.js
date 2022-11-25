"use strict";

var express = require('express');

var router = express.Router();

var pArray = require('./insertProducts');

router.get("/", function (req, res) {
  var arr = pArray.pArray;
  console.log(arr);
  return res.render("showdata.pug", {
    array: arr,
    name: "pradeep"
  });
});
module.exports = router;