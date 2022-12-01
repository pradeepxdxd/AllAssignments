const fs = require('fs');

const register = (req, res) => {
    let {name, email, pass, age, phone, city} = req.body;
    const emailRecord = fs.readFileSync('./user/record.txt').toString().split('\n');
    const allEmails = getEmails(emailRecord);
    
    if(emailExist(allEmails, email)) {
        res.render('register', {flag : true, msg : "This email is already exist"});
    }
    else {
        let data = `${name},${email},${pass},${age},${phone},${city}`;
        fs.appendFile('./user/record.txt', data + '\n', err => {
            if(err) throw err;
        })
        res.render("register", {main:true, msg:"Registered Successfully"});
    }
}

const login = (req, res) => {
    let {email, pass} = req.body;
    const emailWithString = fs.readFileSync('./user/record.txt').toString().split('\n');
    const emailAndPassword = getEmailAndPassword(emailWithString);
    console.log(emailAndPassword);
    let ans = checkingEmailAndPassword(emailAndPassword, email, pass);
    if(ans.flag){
        res.render("Welcome", {name:ans.name});
    }
    else{
        res.render('login', {loginFlag:true, msg:"Invalid Email And Password"});
    }
}

function checkingEmailAndPassword(emailAndPassword, uemail, upass){
    for(let obj in emailAndPassword){
        let email = emailAndPassword[obj].email;
        let password = emailAndPassword[obj].pass;
        if(email == uemail && password == upass){
            let name = emailAndPassword[obj].name;
            return {
                flag : true,
                name : name
            };
        } 
    }
    return {flag : false};
}

function getEmailAndPassword(emailRecord){
    const ENP = [];
    for (let i of emailRecord){
        let data = i.split(',');
        let name = data[0];
        let email = data[1];
        let pass = data[2];
        let obj = {
            name : name,
            email : email,
            pass : pass
        }
        ENP.push(obj);
    }
    return ENP;
}

function emailExist(allEmails, email){
    for(let i of allEmails){
        if(i === email) return true;
    }
    return false;
}

function getEmails(emailRecord){
    const email = [];
    for(let i of emailRecord){
        let emailInString = i.split(',');
        email.push(emailInString[1]);
    }
    return email;
}

module.exports = {
    register, login
};