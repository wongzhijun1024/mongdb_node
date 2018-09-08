var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hw";

MongoClient.connect(url, function(err, db) {
    console.log("连接成功！");
    if (err) throw err;
    var dbo = db.db("db_student");
    dbo.collection("table_infor"). find({}).toArray(function(err, result) { // 返回集合中所有数据
        if (err) throw err;
        console.log(result);
        db.close();
    });
});