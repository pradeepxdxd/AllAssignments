const express = require('express');
const mongoose = require('mongoose');

const port = 9999;
const app = express();

app.use(express.static('static'));

//db connection
const url = "mongodb://127.0.0.1:27017/mongocrudtask2";
mongoose
    .connect(url)
    .then(res => console.log("Database Connected"))
    .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

const mainPage = require('./routers/mainRouter');
const userPage = require('./routers/userRouter');
const productPage = require('./routers/productRouter');

app.use('/', mainPage);
app.use('/user', userPage);
app.use('/product', productPage);

app.listen(port, () => console.log(`Server is start on ${port}`));