const express = require("express");
const fs = require('fs');
const PORT = 8000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static('static'));

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/gallery', (req, res) => {
    let array = ["https://images.unsplash.com/photo-1661961112835-ca6f5811d2af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80", "https://images.unsplash.com/photo-1669147528483-5b5b4493cbe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80", "https://cdn.pixabay.com/photo/2022/11/19/15/50/holly-7602422_960_720.jpg", "https://cdn.pixabay.com/photo/2022/11/12/16/37/pine-7587392_960_720.jpg", "https://cdn.pixabay.com/photo/2022/11/02/06/42/toadstool-7564167_960_720.jpg", "https://cdn.pixabay.com/photo/2022/11/17/23/32/plant-7599090_960_720.jpg", "https://cdn.pixabay.com/photo/2022/11/17/21/15/great-spotted-woodpecker-7598894_960_720.jpg", "https://cdn.pixabay.com/photo/2022/11/07/18/29/bird-7576994_960_720.jpg", "https://cdn.pixabay.com/photo/2022/11/19/10/03/rose-7601741_960_720.jpg", "https://cdn.pixabay.com/photo/2022/11/02/04/07/deer-7563934_960_720.jpg", "https://cdn.pixabay.com/photo/2022/11/07/17/20/city-7576853_960_720.jpg", "https://cdn.pixabay.com/photo/2022/11/04/16/22/cat-7570252_960_720.jpg", "https://cdn.pixabay.com/photo/2022/10/25/21/54/caterpillar-7546984_960_720.jpg"];
    res.render('gallery', {arr : array});
})
app.get('/services', (req, res) => {
    res.render('services');
})
app.get('/contact', (req, res) => {
    res.render('contact');
})
app.post('/data', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let pass = req.body.pass;
    let age = req.body.age;
    let city = req.body.city;
    let mobile = req.body.mobile;

    let data = `Name :- ${name}, Email :- ${email}, Password :- ${pass}, Age :- ${age}, City :- ${city}, Mobile :- ${mobile}` + '\n';

    fs.appendFile('file.txt', data, err => {
        if(err) throw err;
    })

    res.send('data is added');
})
app.get('/details', (req, res) => {
    var array = fs.readFileSync('file.txt').toString().split("\n");
    res.render('details', {file : array});
})

app.listen(PORT, err => {
    if(err) throw err;
    else console.log(`Server is run on ${PORT}`);
})