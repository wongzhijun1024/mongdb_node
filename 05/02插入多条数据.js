var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/hw";
var ObjectId = require('mongodb').ObjectID;
// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("db_student");
//     var myobj =  [
//         { name: "小杨", age: 17 },
//         { name: "小王", age: 16 },
//         { name: "小美", age: 19 }
//     ];
//     dbo.collection("table_student").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("插入的文档数量为: " + res.insertedCount);
//         db.close();
//     });
// });


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db_student");
    var myobj =  [
        { user_id: new ObjectId('5b93ce2af5e3f04968266ba3'), infor: '小林很美1' },
        { user_id:new  ObjectId('5b93ce2af5e3f04968266ba3'), infor: '小林很美2' },
        { user_id:new  ObjectId('5b93ce2af5e3f04968266ba3'), infor: '小林很美3' },
        { user_id:new  ObjectId('5b93d865cf26fb0b68e77fb7'), infor: '小杨很美2' },
        { user_id:new  ObjectId('5b93d865cf26fb0b68e77fb7'), infor: '小杨很美3' },
        { user_id:new  ObjectId('5b93d865cf26fb0b68e77fb7'), infor: '小杨很美4' },
        { user_id:new  ObjectId('5b93d865cf26fb0b68e77fb7'), infor: '小杨很美5' },
        { user_id:new  ObjectId('5b93d865cf26fb0b68e77fb8'), infor: '小王很美1'},
        { user_id:new  ObjectId('5b93d865cf26fb0b68e77fb8'), infor: '小王很美2'},
        { user_id:new  ObjectId('5b93d865cf26fb0b68e77fb8'), infor: '小王很美3'},
        { user_id:new  ObjectId('5b93d865cf26fb0b68e77fb8'), infor: '小王很美4'},
        { user_id:new  ObjectId('5b93d865cf26fb0b68e77fb8'), infor: '小王很美5'},
        { user_id:new  ObjectId('5b93d865cf26fb0b68e77fb9'), infor: '小美很美' }
    ];
    dbo.collection("table_infor").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log("插入的文档数量为: " + res.insertedCount);
        db.close();
    });
});