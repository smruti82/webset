var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}= require('./db/mongoose');
var {User}=require('./models/user');

var app=express();

app.use(bodyParser.json());

app.post('/user',(req,res)=>{
var user=new User({
   email: req.body.email
});

user.save().then((doc)=>{
res.send(doc);
},(e)=>{
res.status(400).send(e);
});

});


app.get('/user',(req,res)=>{

User.find().then((users)=>{
res.send(users);
},(e)=>{
res.status(400).send(e);
});

});


app.listen(3000, ()=>{
	console.log('started');
});

