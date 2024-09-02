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

### 闭包

闭包是指在一个函数内部定义的函数,可以访问到函数外部的变量.闭包允许函数在定义它的作用作用域之外运行时保持在该作用域的访问

- 作用: 闭包可以用来创建私有变量和函数,也可以用来保持状态,记住某些信息

```javascript
function makeCounter() {
    let count = 0; // count 是局部变量
    return function () {
        count++;  // 内部函数可以访问到外部函数的变量
        console.log(count);
    };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
```

### 作用域

作用域是指程序中定义变量的区域,决定了变量的可访问性,javaScript有三种作用域:

- 全局作用域: 在代码的任何地方都能访问到的作用域
- 函数作用域: 在函数内部定义的变量只能在函数内访问
- 块级作用域(ES6引入): 使用let和const声明的变量在块级(例如 {} 内)范围内有效

```javaScript
var globalVar = 'I am global'

function myFunction() {
    var functionVar = 'I am inside a function';
    if (true) {
        let blockVar = 'I am inside a block'
        console.log(blockVar); // 'I am inside a block'
    }
    // console.log(blockVar); //  ReferenceError: blockVar is not defined
    console.log(functionVar) // 'I am inside a function'
};

myFunction();
console.log(globalVar); // 'I am global'
// console.log(functionVar); // ReferenceError: functionVar is not defined
```
