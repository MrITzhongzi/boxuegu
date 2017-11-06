var changeAO = {}

function objToArr(obj) {
    var arr = []
    arr.push(obj)
    return arr
}

function arrToObj(propertyName,arr) {
    var obj = {}
    obj[propertyName] = arr
    return obj
}

function arrToString (arr){

}

changeAO = {
    objToArr,
    arrToObj,
    arrToString
}

module.exports = changeAO