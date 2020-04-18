/*
 * 说明：请实现 flatten(input) 函数，input 为一个 javascript 对象（Object 或者 Array），返回值为扁平化后的结果。
 * 示例：
 *   var input = {
 *     a: 1,
 *     b: [ 1, 2, { c: true }, [ 3 ] ],
 *     d: { e: 2, f: 3 },
 *     g: null, 
 *   }
 *   var output = flatten(input);
 *   output如下
 *   {
 *     "a": 1,
 *     "b[0]": 1,
 *     "b[1]": 2,
 *     "b[2].c": true,
 *     "b[3][0]": 3,
 *     "d.e": 2,
 *     "d.f": 3,
 *     // "g": null,  值为null或者undefined，丢弃
 *  }
 */

let input = {
    a: 1,
    b: [ 1, 2, { c: true }, [ 3 ] ],
    d: { e: 2, f: 3 },
    g: null, 
    h: { i: 1, j : 2, k : 3 },
    l: {}
}

// 1. 对象扁平化
function flattenObj(obj){
    let res = {}
    recurseFlatten(obj,'')
    function recurseFlatten(src,prop){   
        if(Object.prototype.toString.call(src) === '[object Object]'){  
            let isEmpty = true
            for(let p in src){
                isEmpty = false
                recurseFlatten(src[p],prop ? prop + '.' + p : p)
            }
            if(prop && isEmpty){  // 空对象
                res[prop] = {}
            }
        }else if(Array.isArray(src)){
            let len = src.length
            if(len > 0){   // 数组不是空数组
                src.forEach((item,index)=>{
                    recurseFlatten(item,prop ? prop + '[' + index + ']' : index)
                })  
            }else{   // 是空数组
                res[prop] = []
            }
        }else{
            if(src){   // 属性值为null则去掉
                res[prop] = src
            }
        }
    }

    return res
}

let obj_res = flattenObj(input)
console.log("obj_res:",obj_res)







// 2. 数组扁平化
let arr = [1,2,[3,4,[5]]]
function flattenArray(arr,res){
    if(!res){
        res = []
    }
    for(let i of arr){
        if(typeof(i) !== 'object'){
            res.push(i)
        }else{
            flattenArray(i,res)
        }
    }
    return res
}

let arr_res = flattenArray(arr)
console.log("arr_res:",arr_res)