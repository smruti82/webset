// const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectId}= require('mongodb');

var obj =new ObjectId();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
	if(err){
		return console.log('unable to connect');

	}
	console.log('connected');
	const db=client.db('Todoapp');

// db.collection('Todos').deleteMany({text:'anything'}).then((result)=>{
// console.log(result);
//  });

// db.collection('Todos').deleteOne({text:'something'}).then((result)=>{
// console.log(result);
//  });
db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
console.log(result);
 });


	client.close();
});