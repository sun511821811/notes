# ES6+ 新特性

ES6(也称为 `ECMAScript 2015` )及其后续版本引入了许多新特性,使 `javascript` 更加强大,灵活和现代化

## 块级作用域(Block Scope)

-   `let` 和 `const`: `let` 用于声明变量, `const` 用于声明常量.它们都是会计作用域,不能在声明之前使用,避免了传统 `var` 的变量提升问题

```js
let x = 10;
const y = 20;
```

## 箭头函数(Arrow Function)

-   更简洁的函数定义方式,且不绑定自己的 `this` 值(继承自外层上下文)

```js
const add = (a, b) => a + b;
```

## 模版字符串(Template Strings)

-   使用反引号(`)定义, 可以在字符串中嵌入表达式和多行字符串

```js
const name = "Alice";
const grerting = `Hello ${name}!`;
```

## 结构赋值(Destructuting Assignment)

-   从数组或对象提取值, 并将其赋值给变量,写法更简洁

```js
const [a, b] = [1, 2];
const { name, age } = { name: "Alice", age: 25 };
```

## 模块(Modules)

-   使用 `import` 和 `export` 来导入和导入模块,提高代码的可维护性和重用性

```js
// math.js 导出

export const pi = 3.14;

// main.js 引入

import { pi} = './math'
```

## 类 (Calss)

-   基于原型的面向对象语法糖,支持继承和构造函数

```js
class Preson {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}!`);
    }
}

const greet = new Preson("liChen");
greet.greet(); // prints "Hello liChen!"
```

## 默认参数(Default Parameters)

-   函数参数可以设置默认值

```js
function greet(name = "Guest") {
    console.log(`Hello ${name}!`); // print "Hello Guest!"
}
```

## 剩余参数与扩展运算符 (Rest and Spread Operators)

-   剩余参数: 用于将函数的多个参数收集为一个数组
-   扩展运算符: 用于在函数调用时将数组展开为多个参数, 或者用于数组和对象的合并

```js
function sum(...numbers) {
    return numbers.reduce((acc, curr) => {
        acc + curr;
    }, 0);
}
const arr = [1, 2, 3]; // [1, 2, 3]
const arr2 = [...arr, 4, 5]; // [1, 2, 3, 4, 5]
const obj = { a: "1" }; //{ a: "1"}
const obj2 = { ...a, b: "2" }; //{ a: "1", b: "2" };
```

## Promise

-   用于处理异步操作的对象,解决回调地狱的问题

```js
const promise = new Promise((resolve, reject) => {
    setTimeout(resolve,1000,"Success");
});

promise.then((result) =>console.log(result)).catch(err){console.log(err)}
```

## 异步函数 (Async/Await)

-   基于 `Promise` 的语法糖,使异步代码看起来更简洁

```js
async function fetchData() {
    try {
        const data = await fetch("https://api.twitter.com/");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
```

## Symbol

-   创建唯一的值,避免对象属性名冲突

```js
const sym = Symbol("unique");
const obj = {
    [sym]: "value",
};
```

## Map 和 Set

-   Map: 键值对集合,键可以是任何类型
-   Set: 值的集合,每一个值都是唯一的

```js
const map = new Map();
map.set("key", "value");
map.set("name", "Alice");
map.has("name"); // true
map.get('name'): // Alice
map.clear(); // 清空
console.log(map.size); // 长度
map.delete('name')

// 遍历键
for(const key of map.keys()){
    console.log(key);
}

// 遍历值
for(const value of map.values()){
    console.log(value);
}

// 遍历键值对
for (const [key, value] of map.entries()) {
    console.log(key, value);
}

const set = new Set([1, 2, 3, 3]); // set: [1, 2, 3]
```
