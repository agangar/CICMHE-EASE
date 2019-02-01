const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const constants = require('./constants');
const JSON = require('circular-json');

const router = express.Router();

router.get('/products', (request, response)=>{
	console.log('Inside /api/products request');

	mongoClient.connect(constants.mongo_url, { useNewUrlParser: true }, (err, database) => {
		if(err){
			console.log('Error occured while trying to connect to database');
			throw err;
		}
		var db = database.db(constants.ease_db);
		db.collection(constants.products_collection).find({}).toArray(function(error, x){
			if(error) throw error;
			console.log(x);
			response.send(JSON.stringify(x));
			database.close();
		});
		
		
	});
});


router.get('/search*',(request,response) =>{
console.log('Inside /api/products search');

	mongoClient.connect(constants.mongo_url, { useNewUrlParser: true }, (err, database) => {
		if(err){
			console.log('Error occured while trying to connect to database');
			throw err;
		}
		var db = database.db(constants.ease_db);
		var query = { productName : request.query.query};
		console.log(query);
			db.collection(constants.products_collection).find(query).toArray(function(error, x){
			if(error) throw error;
			console.log(x);
			response.send(JSON.stringify(x));
			database.close();
		});
		
		
	});
});

router.get('/filters', (request, response)=>{
	console.log('Inside /api/filters request');

	mongoClient.connect(constants.mongo_url, { useNewUrlParser: true }, (err, database) => {
		if(err){
			console.log('Error occured while trying to connect to database');
			throw err;
		}
		var db = database.db(constants.ease_db);
		var data=[];
		db.collection("matrix").findOne({}, function(err, result) {
    		if (err) throw err;
    		console.log(result);
    		for(key in result) {
    			if(key!="_id" && key !="productName")
    			data.push(key);
    		}
    		console.log(JSON.stringify(data));
    		response.send(JSON.stringify(data));
 		 });
		
		database.close;
		
		
	});
});

router.get('/allproducts', (request, response)=>{
	console.log('Inside /api/filters request');

	mongoClient.connect(constants.mongo_url, { useNewUrlParser: true }, (err, database) => {
		if(err){
			console.log('Error occured while trying to connect to database');
			throw err;
		}
		var db = database.db(constants.ease_db);
		var data=[];
		db.collection("matrix").distinct("productName", function(err, result) {
    		if (err) throw err;
    		console.log(result);
    		console.log(JSON.stringify(result));
    		response.send(JSON.stringify(result));
 		 });
		
		database.close;
		
		
	});
});




module.exports = router;