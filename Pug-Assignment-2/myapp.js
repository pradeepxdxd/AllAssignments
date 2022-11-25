const express = require('express');
const port = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('static'));

const indexPage = require("./routes/mainpage");
const insertPage = require("./routes/insertProducts");
const showPage = require("./routes/showProducts");

app.use("/", indexPage);
app.use("/insert", insertPage.router);
app.use("/show", showPage);

app.listen(port, err => {
    console.log(`Server is work on ${port}`);
})