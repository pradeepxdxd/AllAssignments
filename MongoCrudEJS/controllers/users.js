const schema = require('../model/registerationSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const insertData = (req, res) => {
    let {name, email, pass} = req.body;
    
    const hash = bcrypt.hashSync(pass, saltRounds);
    schema.create({
        name : name,
        email : email,
        pass : hash
    }).then(data => {
        res.render('login');
    }).catch(err => {
        res.render("register", {title : 'Sign Up'});
    })
}

async function getData(){
    try{
        const data = await schema.find();
        return data;
    }
    catch(error){
        console.log(error);
    }
}

async function loginData(req, res){
    let {email, pass} = req.body;
    let checkLog = await getData();
    checkLog.filter((ele)=>{
        if(ele.email == email && bcrypt.compareSync(pass, ele.pass)){
            res.render('producthome', {title : 'Product', name : ele.name});
        }
    })
}

module.exports = {insertData, loginData};