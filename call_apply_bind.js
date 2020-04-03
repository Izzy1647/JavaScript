// 实现自己的call apply bind

Function.prototype.myCall = function(obj,...argu){
    obj._f = this
    let res = obj._f(...argu)
    delete obj._f
    return res
}

Function.prototype.myApply = function(obj,arguList){
    obj._f = this
    let res = obj._f(...arguList)
    delete obj._f
    return res
}

Function.prototype.myBind = function(obj,...argu){
    return ()=>this.myCall(obj,...argu)
}

// test code:
global.name = 'global'

let obj1 = {
    name:"Izzy",
    age:20
}

let obj2 = {
    name:"Bob",
    age:18
}

function showMyself(a,b){
    console.log("I am",this.name,a,b)
}
showMyself(1,2)  // I am global 1 2

showMyself.myCall(obj1,1,2)  // I am Izzy 1 2
showMyself.myApply(obj2,[1,2])  // I am Bob 1 2
let f = showMyself.myBind(obj1,1,2)
f()  // I am Izzy 1 2