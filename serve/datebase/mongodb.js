
var MongoClient = require('mongodb').MongoClient
var DB_CONN_STR = 'mongodb://localhost:27017/boxuegu'  //数据库为 boxuegu


var insertData = function(db, callback,someData) {  
    //连接到表 login
    var collection = db.collection('login')

    //插入数据
    // var data = [{"username":"test","password":"123"}];
    collection.insert(someData, function(err, result) { 
        if(err)
        {
            console.log('Error:'+ err);
            return
        }     
        callback(result);
    });
}
 

function insert(someData){
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        insertData(db, function(result) {
            console.log(result);
            db.close();
        },someData);
    })
    
}

module.exports = {
    insert
}