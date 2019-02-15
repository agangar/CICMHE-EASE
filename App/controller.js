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
		var query={productName : request.query.query};
		var query="xyz."+ request.query.query;
		var filter={};
		filter[query]=true;
		console.log(filter);

		db.collection(constants.products_collection).aggregate([{ $sort: {"company":1}}, { $lookup: { from:"matrix", localField:"productName", foreignField: "productName", as:"xyz"  } },{$unwind:"$xyz"},{$match: filter},{ $project : { _id: 0, xyz: 0} } , { $sample: { size: 10 } }]).toArray(function(error, x){
			if(error) throw error;
			for(var key in x){
				console.log(x[key].company+'" ');
			x[key].company=x[key].company.toString().trim();
			
				console.log(x[key].company+'" '+x[key].fileType);
			x[key].fileType=x[key].fileType.toString().toLowerCase();
			console.log(x[key].company+'" '+x[key].fileType);
			}
			
			response.send(JSON.stringify(x));
			database.close();
		});
		
		
	});
});

router.get('/filters', (request, response)=>{

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
    		data.push("All Products");
    		for(key in result) {
    			if(key!="_id" && key !="productName"){
    			console.log(key);
    			data.push(key);
    		}
    		}
    		data.sort();
    		console.log(JSON.stringify(data));
    		response.send(JSON.stringify(data));
 		 });
		
		database.close;
		
		
	});
});

router.get('/allproducts', (request, response)=>{

	mongoClient.connect(constants.mongo_url, { useNewUrlParser: true }, (err, database) => {
		if(err){
			console.log('Error occured while trying to connect to database');
			throw err;
		}
		var db = database.db(constants.ease_db);
		
		db.collection(constants.matrix).distinct("productName", function(err, result) {
    		if (err) throw err;
    		console.log(result);
    		console.log(JSON.stringify(result));
    		response.send(JSON.stringify(result));
 		 });
		
		database.close;
		
		
	});
});

router.get('/resultProducts',(request,response) =>{
		mongoClient.connect(constants.mongo_url, { useNewUrlParser: true }, (err, database) => {
		if(err){
			console.log('Error occured while trying to connect to database');
			throw err;
		}
		var db = database.db(constants.ease_db);
		var query=request.query.query;
		var filter={};
		filter[query]=true;
		console.log(filter);
		var data=[];
		db.collection(constants.matrix).find(filter).project({_id:0,productName:1}).toArray(function(error, x){
			if(error) throw error;
			console.log(x);
			for(key in x) {
    			if(key!="_id" && key !="productName")
    			data.push(x[key].productName);
    		}
    		console.log(data);
			response.send(JSON.stringify(data));
			database.close();
});

	});
});

router.get('/productSearch*',(request,response) =>{
		mongoClient.connect(constants.mongo_url, { useNewUrlParser: true }, (err, database) => {
		if(err){
			console.log('Error occured while trying to connect to database');
			throw err;
		}
		var db = database.db(constants.ease_db);
		var length=request.query.length;
		var filter=[];
		for(var i=0;i<length;i++)
			filter.push(request.query[i.toString()]);
		console.log(filter);
			db.collection(constants.products_collection).aggregate([  
        { $sample: {size: 10 } }, 
        { $match:  {productName: {$in: filter}} } 
      ]).toArray(function(error, x){
			if(error) throw error;
			console.log(x);
			
			response.send(JSON.stringify(x));
			database.close();
});

	});
});

router.get('/allProductSearch', (request, response)=>{

	mongoClient.connect(constants.mongo_url, { useNewUrlParser: true }, (err, database) => {
		if(err){
			console.log('Error occured while trying to connect to database');
			throw err;
		}
		var db = database.db(constants.ease_db);
		
		db.collection(constants.products_collection).aggregate([{'$sample': {'size': 10 }}]).toArray(function(err, result) {
    		if (err) throw err;
    		console.log(result);
    		response.send(JSON.stringify(result));
 		 });
		
		database.close;
		
		
	});
});

router.get('/companyList', (request, response)=>{

	mongoClient.connect(constants.mongo_url, { useNewUrlParser: true }, (err, database) => {
		if(err){
			console.log('Error occured while trying to connect to database');
			throw err;
		}
		var db = database.db(constants.ease_db);
		
		db.collection(constants.products_collection).distinct("company",function(err, result){
    		if (err) throw err;
    		result=result.sort();
    		response.send(JSON.stringify(result));
 		 });
		
		database.close;
		
		
	});
});
module.exports = router;