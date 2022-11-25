const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("Login Page");
    res.render('login.pug');
})
router.post("/data", (req, res) => {
    let xemail = req.body.email;
    let xpass = req.body.pass;
    let xfname = req.body.fname;
    console.log(xemail + " " + xpass + " " + xfname);
    res.render("welcome.pug", {email:req.body.email,
        pass : req.body.pass,
        fname : req.body.fname
    });
})
module.exports = router;