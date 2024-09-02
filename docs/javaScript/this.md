### this指针

this 是一个上下文相关的关键字,指向当前执行代码中的上下文对象

- 在全局作用域中,this指向全局对象(在浏览器中是window,在Node.js是global)
- 在函数内部中,默认情况下,this也指向全局对象,但如果函数是作为对象的方法调用的,那么this指向调用该方法的对象
- 在构造函数中,this指向新创建的实例对象
- 在箭头函数中,this是从它定义时的词法作用域继承的,指向包围箭头函数的上下文,而不是调用时的上下文.

```js
function regualarFunction() {
    console.log(this);
}

const arrowFunction = () => {
    console.log(this);
};

const obj = {
    method: regualarFunction,
    arrow: arrowFunction,
};

regualarFunction(); //全局对象
obj.method(); // obj
obj.arrow(); // 全局对象(或在模块中是 undefined)
```
