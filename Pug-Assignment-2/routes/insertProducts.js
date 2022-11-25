var productArray = [];

const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("insert-page.pug");
})
router.post("/product-data", (req, res) => {
    let obj = {
        pname : req.body.pname,
        price : req.body.price,
        qun : req.body.qun,
        imgurl : req.body.imgurl
    }
    productArray.push(obj);
    // console.log(`${pname} ${price} ${qun} ${imgurl}`);
    res.send("<h1> Your Data Successfully added </h1>");
})
router.get("/show-array", (req, res) => {
    for(let data in productArray){
        console.log(productArray[data]);
    }
    res.send("<h1> Show data </h1>");
})
router.get("/clear-array", (req, res) => {
    productArray = [];
    res.send("<h1> clear data </h1>");
})

module.exports = {
    router : router,
    pArray : productArray
}