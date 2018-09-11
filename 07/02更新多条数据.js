var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/hw';

MongoClient.connect(url, function(err, db) {
    console.log("连接成功！");
    //连接到表
    var dbo = db.db("db_student");
    //更新数据
    var whereStr = {"name":'小明'};
    var updateStr = {$set: { age : 18 }};
    dbo.collection("table_student").updateMany(whereStr, updateStr, function(err, res) {
        if (err) throw err;
        console.log("文档更新成功");
        db.close();
    });
});