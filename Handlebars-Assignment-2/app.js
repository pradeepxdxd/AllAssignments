const express = require('express');
const exphbs = require('express-handlebars');
const port = 9000;
const app = express();

app.use(express.static('static'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const mainPage = require('./routes/mainRouter');
const userPage = require('./routes/usersRouter');

app.use('/', mainPage);
app.use('/user', userPage);

app.listen(port, () => {
    console.log(port);
})