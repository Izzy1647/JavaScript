/**
 * 说明：简单实现一个事件订阅机制，具有监听on和触发emit方法
 * 示例：
 * const event = new EventEmitter();
 * event.on('someEvent', (...args) => { 
 *     console.log('some_event triggered', ...args);
 * }); 
 * event.emit('someEvent', 'abc', '123'); 
*/


class EventEmitter{
    constructor(){
        this.handlers = {}   // 存放被监听的方法名称及监听触发的事件
        // {
        //     'name1':[handler1,handler2,...],
        //     'name2':[handler1,handler2,...]
        // }  
    }
    on(name,handler){   // name:被监听的事件的名字  handler:监听到之后做的事情
        if(!(name in this.handlers)){
            this.handlers[name] = []
        }
        this.handlers[name].push(handler) 
    }

    emit(name){  // name: 被监听的事件的名字 
        let argus = [...arguments]
        argus.shift()  // 参数数组
        if(name in this.handlers){
            for(let i=0;i<this.handlers[name].length;i++){
                this.handlers[name][i](...argus)
            }
        }
    }

    showHandlers(){
        console.log("handlers:",this.handlers)
    }
}


// test code:
const event = new EventEmitter()

event.on('someEvent',(...args) => { 
    console.log('some_event triggered', ...args);
})

event.on('anotherEvent',(...args) => {
    console.log('another_event triggered', ...args)
})

event.emit('someEvent', 'abc', '123')
event.emit('anotherEvent',1,2,3)

event.showHandlers()


