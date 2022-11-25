const express = require('express');
const router = express.Router();
const pArray = require('./insertProducts')

router.get("/", (req, res) => {
    let arr = pArray.pArray;
    console.log(arr);
    return res.render("showdata.pug", {array:arr});
})

module.exports = router;