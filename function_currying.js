// 函数科里化
// 用于创建已经设置好一个或多个参数的函数

function add(a,b){
    return a + b
}

Function.prototype.curry = function(){
    let args = [...arguments]
    return ()=>{     // 使用箭头函数避免改变this指向
        let innerArgs = [...arguments]
        let finalArgs = args.concat(innerArgs)
        return this.apply(null,finalArgs)
    }
}

let add1 = add.curry(1)
console.log(add1(1))

// or...

function curryFunction(fn){
    let args = [...arguments] // [fn, arg1,arg2,...]
    args.shift()
    console.log(args)
    return function(){
        let innerArgs = [...arguments]
        let finalArgs = args.concat(innerArgs)
        return fn(...finalArgs)
    }
}

let add2 = curryFunction(add,2)
console.log(add2(3))

