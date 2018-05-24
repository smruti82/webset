var mongoose= require('mongoose');

var User= mongoose.model('User',{
email:{
     type:String,
     required:true,
     minlength:3,
     trim:true
// },
// completed:{
// type:Boolean,
// default:false
// },
// completedAt:{
// type:Number,
// default:null
}
});

// var newTodo=new Todo({
// 	email:'cook dinner'
// 	// completed:false,
// 	// completedAt:123

// });

// newTodo.save().then((doc)=>{
// 	console.log('saved todo',doc)
// },(e)=>{

// 	console.log('unable to save todo',e);
// });

module.exports={
	User
};