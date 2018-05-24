const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {User}=require('./../server/models/user');

var id= '5b06d05c2f14b700bc748da6';


User.findById(id).then((user)=>{
if(!user){
	return console.log('Id not found');
}
console.log(JSON.stringify(user));
}).catch((e)=>console.log(e));