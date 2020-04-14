/** 
 * 函数组合运行
 * 说明：实现一个方法，可将多个函数方法按从左到右的方式组合运行。
 *   如`composeFunctions(fn1,fn2,fn3,fn4)`等价于`fn4(fn3(fn2(fn1))`。
 * 示例：
 *  const add = x => x + 1;
 *  const multiply = (x, y) => x * y;
 *  const multiplyAdd = composeFunctions(multiply, add);
 *  multiplyAdd(3, 4) // 返回 13
 */

 const add = x => x + 1
const multiply = (x,y) => x * y
const multiplyAdd = composeFunctions(multiply,add)
multiplyAdd(3,4) // 13
 
function composeFunctions(){
    let args = arguments   // [multiply,add]
    return function(){
        let res = args[0].apply(this,arguments)  // arguments：return的这个函数的参数
        // let res = args[0](...arguments)
        let i = 1
        while(i<args.length){
            // res = args[i].call(this,res)
            res = args[i](res)
            i++
        }
        console.log(res)
        return res
    }
}