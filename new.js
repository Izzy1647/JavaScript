// new操作符都做了什么事情？

Function.prototype.myNew = function(){
    let that = Object.create(this)
    let res = this.apply(that,arguments)
    return (res && typeof(res) === 'object') || that
}

// new操作符做的事情：
// 1. 创建一个新对象 继承自构造函数的原型
// 2. 将构造函数的作用域赋给新对象 使this指向新对象
// 3. 执行构造函数中代码（为新对象添加属性）
// 4. 返回新对象
