var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hw";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db_student");
    dbo.collection('table_student').aggregate([
        { $lookup:
                {
                    from: 'table_infor',            // 右集合
                    localField: '_id',    // 左集合 join 字段
                    foreignField: 'user_id',         // 右集合 join 字段
                    as: 'inforData'           // 新生成字段（类型array）
                }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});