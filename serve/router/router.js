/**
 *  选择路由
 */

var accountRouter = require('./account.js')

function chooseRouter(request, response){
    var urlStr = request.headers.referer
    if (urlStr.indexOf("login.html") != -1 || urlStr.indexOf("register.html") != -1){
        accountRouter.accountRouter(request, response)
    } 
}

module.exports = {
    chooseRouter
}