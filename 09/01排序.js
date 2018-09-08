var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hw";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db_student");
    var mysort = { age: 1 };
    dbo.collection("table_student").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});