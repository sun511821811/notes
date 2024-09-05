# async/await

`async`/`await` 是 `javascript`中用于处理异步操作的语法糖,它基于`Promise`,可以让异步代码看起像同步代码一样更容易阅读与维护.

## 基本理念

-   async 函数:
    -   用于声明一个异步函数
    -   `async` 函数总是返回一个`Promise`,即使你在函数内部返回不是一个`Promise`
-   await 关键字
    -   只能在 `async` 函数中使用
    -   `await`会暂停 `async` 函数的执行,等待`Promise`完成并返回一个结果
    -   当`Promise`完成时,`await`返回值;如果`Promise`被拒绝,`await`会抛出异常

## 使用示例

```js
// 模拟一个异步操作的 Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("数据获取成功");
        }, 1000);
    });
}

// 使用 async/await

async function getData() {
    try {
        console.log("开始获取数据.....");
        const result = await fetchData(); // 等待 fetchData 完成
        console.log("result: " + result); // result: 数据获取成功
    } catch (error) {
        console.log("Error: " + error);
    }
}

getData();
```

## 工作原理

-   async 函数:
    -   当你的函数前面加上 `async` ,该函数会返回一个 `Promise` .
    -   函数内部的异常会导致返回的 `Promise` 被拒绝
-   await 操作符
    -   当 `await` 一个 `Promise` 时, `javascript` 引擎会暂停当前的 `async` 函数的执行,直到 `Promise` 完成.
    -   `await` 后面的表达式会被转换为一个 `Promise` (如果不是 `Promise` 会被自动包装成 `Promise`)

## 错误处理

-   可以使用 `try/catch` 块来捕获 `await` 的异常

```js
async function fetchWithError() {
    throw new Error("出错了");
}

async function handleError() {
    try {
        await fetchWithError(); // 抛出错误
    } catch (err) {
        console.log(err); // 输出: 出错了
    }
}

handleError();
```

## 使用 Promise.all 处理多个异步操作

如果有多个异步操作并行执行,可以用 `Promise.all` 搭配 `await`

```js
async function fetchData1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("数据一");
        }, 1000);
    });
}

async function fetchData2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("数据二");
        }, 1000);
    });
}

async function fetchAll() {
    try {
        const results = await Promise.all([fetchData1(), fetchData2()]);
        console.log(results); // 输出: ['数据一', '数据二']
    } catch (err) {
        console.log(err);
    }
}

fetchAll();
```

## 注意事项

-   只能在 `async` 函数中使用 `await` : 在普通函数或者全局作用域中使用 `await` 会导致语法错误
-   错误处理: 务必使用 `try/catch` 处理 `await` 操作的异常; 防止未处理的错误导致程序的崩溃
-   并发: 使用 `Promise.all` 可以并发执行多个异步任务,而不是顺序等待
-   避免堵塞: `await` 会阻塞 `async` 函数的执行, 但不会阻塞主线程,这对 `I/O` 密集型任务是有好处
