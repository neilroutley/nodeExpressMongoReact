var express = require('express');
var router = express.Router();

function connect(callback){
	var MongoClient = require("mongodb").MongoClient;

	var url = "mongodb://localhost:27017";

	var client = new MongoClient(url);

	// connect to the database
	client.connect(function(err){
		if(err!==null) throw err;

		// get the database
		var db = client.db("dbcomments");
		// get collection
		var comments = db.collection("comments");

		callback(comments, client);
	});
}

function getComments(callback){
	connect(function(comments, client) {
		comments.find({})
	    	.limit(100)
	    	.toArray(function(err2, docs){
	      		if(err2!==null) throw err2;
	  	  
		  	    // here are the documents
		  	    console.log("got " + docs.length + " comments");

		  	    // send my documents
		  	    callback(docs);

  		  	    client.close();	
			});	  
	  });
}

function createComment(c){
	connect(function(comments, client){
		comments.insertOne(c, function(err3){
			if (err3!==null) throw err3;

			console.log("Inserted!!");
		});
	});
}

/* GET home page. */
router.post('/createMessage', function(req, res, next) {
	createComment({
		text:req.body.text
	});
  	res.redirect("/");
  	console.log("createMessage", req.body);
});

router.get('/getMessage', function(req, res, next) {
	console.log("getMessages!!");
	getComments(function(docs) {
  	  res.send(docs);
	});
});

module.exports = router;
