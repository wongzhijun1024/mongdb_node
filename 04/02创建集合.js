var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/hw';
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log('数据库连接');
    var dbase = db.db("db_student");//db_student数据库
    dbase.createCollection('table_student', function (err, res) {//table_student表
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});