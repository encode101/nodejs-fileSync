var server = require('./server.js');
var connection = require('./connections.js');
var console = require('console');
var url = 'mongodb://localhost:27017/learnmongo';
var aws = require('aws-sdk');
var fs = require('fs');

var syncFile = function(){
	fs.watch('./sample.txt', function(err, data){
		if(err){
			console.error("Error Occoured:  "+err);
			return;
		}
		//console.error(data)
	});
}

syncFile();

var insertMongo = function(fileName){
		connection.connect(url, function(err, db) {
		if(err){
			console.error("Error Encountered : "+err)
			return;
		}	  	
	 	db.collection('devices').insertOne({
	  		"fileName": fileName
	  	}).then(function(data){
	  		console.log("Inserted File Info.Successfully!");
	  		db.close();
	  	}).catch(function(err){
			console.error("Error Inserting File Info. : "+err)
	  	})
	});
} 

module_exports = {

}