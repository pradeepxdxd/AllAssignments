const http = require('http');
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html> <body style="background:cyan"> <a style="margin:14px;" href="/createFile" >Create File</a> <a href="/readFile" style="margin:14px;">Read File</a> <a style="margin:14px;" href="/updateFile" >Update File</a> <a style="margin:14px;" href="/deleteFile" >Delete File</a></body></html>')
        res.end();
    }
    else if(req.url === '/createFile'){
        if(fs.existsSync("neosoft.txt")){
            res.end("File is created");
        }
        else {
            fs.writeFile("neosoft.txt", "Welcome to NeoSOFT!", (err) => {
                if (err) throw err;
                res.end('File Created');
            })
        }
    }
    else if(req.url === '/readFile'){
        if(fs.existsSync('neosoft.txt')){
            let data = fs.readFileSync("neosoft.txt");
            res.end(data.toString());
        }
        else {
            res.end("File is not exist");
        }
    }
    else if(req.url === '/updateFile'){
        if(fs.existsSync('neosoft.txt')){
            fs.appendFile("neosoft.txt", "Next Text...", (err) => {
                if(err) throw err;
                else res.end("File is appended");
            })
        }
        else {
            res.end("<h1> File is not exist </h1>");
        }
    }
    else if(req.url === '/deleteFile'){
        if(fs.existsSync('neosoft.txt')){
            fs.unlink('neosoft.txt', err => {
                if (err) throw err;
                else res.end("File is deleted");
            });
        }
        else {
            res.end("File is not exist");
        }
    }
    else {
        res.end("<h1> 404 Page Not Found </h1>")
    }
})

server.listen(port, err => {
    if(err) throw err;
    else console.log(`Server is work on ${port}`);
})