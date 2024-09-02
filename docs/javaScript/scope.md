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
