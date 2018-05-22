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
// db.collection('Todos').find().toArray().then((docs)=>{
// console.log('Todos');
// console.log(JSON.stringify(docs, undefined, 2));
// },(err)=>{
// 	console.log('unable');
// });
db.collection('Users').find({name: 'smruti'}).toArray().then((docs)=>{
console.log('Todos');
console.log(JSON.stringify(docs, undefined, 2));
},(err)=>{
	console.log('unable');
});

	client.close();
}); 