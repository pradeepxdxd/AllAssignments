const express = require('express');
const fs = require('fs');
const PORT = 7000;

const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the page");
})
app.get("/createPage", (req, res) => {
    fs.writeFile("demo.txt", "Hello World", err => {
        if(err) throw err;
        res.send("<h1> File is created </h1>")
    })
})
app.get("/readFile", (req, res) => {
    fs.readFile("demo.txt", (err, data) => {
        res.writeHead(200, {'Content-type' : 'text/plane'});
        res.write(data);
        return res.send();
    })
})
app.get("/updatePage", (req, res) => {
    fs.appendFile("demo.txt", " Pradeep Biswas", err => {
        if(err) throw err;
        res.send("<h1> File is updated </h1>")
    })
})
app.get("/deletePage", (req, res) => {
    fs.unlink("demo.txt", err => {
        if(err) throw err;
        res.send("<h1> File is deleted </h1>");
    })
})
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log(`Server Work On ${PORT}`);
})