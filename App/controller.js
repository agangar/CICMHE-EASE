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
		var results= db.collection(constants.products_collection).find({});

		response.send(JSON.stringify(results));
		database.close();
	});
});


router.get('/search',(request,response) =>{

});

module.exports = router;