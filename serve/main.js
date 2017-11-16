
var port = 3000

var http = require('http')
var url = require('url')
var fs = require('fs')
var path = require('path')
const querystring = require('querystring')
var mongodb = require('./datebase/mongodb')

var arrAndObj = require('./tool/arrAndObj')

var server = http.createServer(function (request, response) {

    // var postData = ""; //存储传输过来 的数据
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
    var urlStr = request.headers.referer
    var urlOrign = request.headers.origin
    if (urlStr == urlOrign || urlStr == (urlOrign + '/')) {

    }
    if (urlStr.indexOf("login.html") != -1) {
        // 登录逻辑
        //get 请求
        var urlParam = {
            username: url.parse(request.url, true).query.username,
            password: url.parse(request.url, true).query.password
        }
        //返回的数据
        var loginObj = {
            pageUrl: './main.html'
        }

        var arrParams = arrAndObj.objToArr(urlParam)
        // mongodb.insertAccount(arrParams)
        mongodb.findAllData(function (arrayData) {
            response.setHeader('Access-Control-Allow-Origin', '*') //允许所有人访问(访问的人就不用跨域了)
            // response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5000')  //允许某个  ip 可以跨域
            loginObj.data = arrayData
            response.write(JSON.stringify(loginObj))  //返回前台的数据 用 write、 
            response.end()
        }) //查询所有数据

    } else if (urlStr.indexOf("register.html") != -1) {
        var urlParam = {
            username: url.parse(request.url, true).query.username,
            password: url.parse(request.url, true).query.password
        }
        var registerObj = {
            pageUrl: './login.html',
            text: '插入成功',
            Code: '1'
        }
        var arrParams = arrAndObj.objToArr(urlParam)
        //先查询 没有的话再插入 

        mongodb.findAllData(function (arrayData) {
            var hasUser = false
            for (var i = 0; i < arrayData.length; i++) {
                if (arrayData[i].username == urlParam.username) {

                    hasUser = true

                    response.setHeader('Access-Control-Allow-Origin', '*')

                    registerObj.Code = '2'
                    registerObj.text = '插入失败'

                    response.write(JSON.stringify(registerObj))
                    response.end()
                    break;
                }
            }

            if(!hasUser){  //没有用户的话就插入
                mongodb.insertAccount(arrParams, function (insertSuccess) {
                    if (insertSuccess) {
                        response.setHeader('Access-Control-Allow-Origin', '*') //允许所有人访问(访问的人就不用跨域了)
                        // response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5000')  //允许某个  ip 可以跨域
                        response.write(JSON.stringify(registerObj))  //返回前台的数据 用 write、 
                        response.end()
                    }

                })
            }

        })


    }

})

server.listen(port, '127.0.0.1', function () {
    console.log("Server runing at port: " + port + ".")
});

