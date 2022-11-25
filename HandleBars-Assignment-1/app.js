const express = require('express');
const app = express();
const exphbs = require("express-handlebars")
const port = 1111;

app.engine('hbs', exphbs.engine({
    defaultLayout: "main",
    extname : ".hbs"
}))

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})

app.listen(port, err => {
    if(err) throw err;
    console.log(`Server work on ${port}`);
})