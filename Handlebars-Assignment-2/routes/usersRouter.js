const express = require('express');
const router = express.Router();
const {register, login} = require('../controllers/users');

router.get('/login', (req, res) => {
    res.render('login', {title:"Login"});
})
router.get('/register', (req, res) => {
    res.render('register', {title:"Register"});
})

router.post('/register-data', register);
router.post('/login-data', login);

module.exports = router;