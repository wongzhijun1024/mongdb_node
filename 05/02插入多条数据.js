var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hw";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db_student");
    var myobj =  [
        { name: "小杨", age: 17 },
        { name: "小王", age: 16 },
        { name: "小明", age: 17 },
        { name: "小美", age: 19 }
    ];
    dbo.collection("table_student").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });
});