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

	// db.collection('Todos').insertOne({
	// 	text:'something',
	// 	completed:false

	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('unable to insert',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2))
	// });
   db.collection('Users').insertOne({
   	name:'smruti',
   	age:22,
    
   },(err,result)=>{
   	if(err){
   		return console.log('unable',err);
   	}
   	console.log(result.ops);
   });

	client.close();
}); 