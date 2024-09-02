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
