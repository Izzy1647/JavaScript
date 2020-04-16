// 实现一个深拷贝
function deepClone(obj){
    // 不是对象 或者是null直接返回
    if(typeof(obj) !== 'object' || obj === null){
        return obj
    }
    let res = obj instanceof Array ? [] : {}
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            if(typeof(obj[key] !== 'object')){   // 基本数据类型直接复制
                res[key] = obj[key]
            }else{   // 引用类型递归调用
                result[key] = deepClone(obj[key])
            }
        }
    }
    return res
    
}

// test code:
let obj = {
    name:"Izzy",
    age:18,
    hobbies:['ball','music','Go'],
    parents:{
        mom:"Gao",
        dad:"Zhou"
    }
}

let clonedObj = deepClone(obj)
console.log("res:",clonedObj)