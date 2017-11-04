
var port = 3000

var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')
const querystring = require('querystring')
var mongodb = require('./datebase/mongodb')

var arrAndObj = require('./tool/arrAndObj')

var server = http.createServer(function (request, response) {

    var postData = ""; //存储传输过来 的数据

    //post请求
    // request.addListener("data", function (postDataChunk) {
    //     postData += postDataChunk;
    // });
    // // 数据接收完毕，执行回调函数
    // request.addListener("end", function () {
    //     console.log('数据接收完毕');
    //     var params = querystring.parse(postData)

    //     if(true) { 
    //         var arrParams = arrAndObj.objToArr(params)
    //         mongodb.insert(arrParams)
    //     }
    // })

    
    //get 请求
    var urlParam = {
        username: url.parse(request.url, true).query.username,
        password: url.parse(request.url, true).query.password
    }
    
    if(urlParam.username !== '' || urlParam.password !== '') { 
        var arrParams = arrAndObj.objToArr(urlParam)
        console.dir(arrParams)
        mongodb.insertAccount(arrParams)
    }
    
    response.setHeader('Access-Control-Allow-Origin', '*') //允许所有人访问(访问的人就不用跨域了)
    // response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5000')  //允许某个  ip 可以跨域

    // response.write('this is a demo')  //返回前台的数据 用 write
    response.end()
})

server.listen(port,'127.0.0.1',function(){
    console.log("Server runing at port: " + port + ".")
});

