const express = require('express');
const port = 9000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set('view engine', 'pug');
app.set('views', './views');

const loginPage = require('./routes/login');
const productPage = require('./routes/product');

app.use("/login", loginPage);
app.use("/product", productPage);
app.use(express.static('static'));

app.use(express.static(__dirname + '/images'));

app.listen(port, err => {
    if(err) throw err;
    else console.log(`Server is work on ${port}`);
})