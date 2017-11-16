

var accountContro = require('../controller/accountContro')

function accountRouter(request, response){
    var urlStr = request.headers.referer
    var urlOrign = request.headers.origin
    if (urlStr.indexOf("login.html") != -1) {

        accountContro.loginContro(request, response)
        
    } else if (urlStr.indexOf("register.html") != -1) {
       
        accountContro.registerContro(request, response)

    }

}

module.exports = {
    accountRouter
}

