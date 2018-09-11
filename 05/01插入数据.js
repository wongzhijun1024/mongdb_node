var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hw";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db_student");

    var myobj = { name: "小明", age: 18 };
    dbo.collection("table_bird").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});