
var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    var col = db.collection('find');
    // Get first two documents that match the query
    col.find().toArray(function(err, docs) {
	console.log("loaded: ", docs.length, docs);
	assert.equal(null, err);
	//assert.equal(3, docs.length);
	db.close();
    });
});
