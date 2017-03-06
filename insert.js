var MongoClient = require('mongodb').MongoClient
 , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    var col = db.collection('find');
    // Insert a single document
    col.insertMany([{a:4}, {b:2}, {c:3}, {c:3}], function(err, r) {
	assert.equal(null, err);
	console.log("inserted: ",  r.insertedCount);
	//assert.equal(3, r.insertedCount);
	db.close();
    });
});
