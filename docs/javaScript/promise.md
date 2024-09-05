# Promise

`Promise`是`javascript`中用于处理异步操作的对象,它提供了一种清晰且强大的方式来处理异步代码的执行顺序,避免了传统回调函数(`Callback`)带来的嵌套问题,也就是"回调地狱"

## Promise 的状态

### 一个 Promise 对象中有三种状态

-   1. Pending(进行中): 初始状态,操作尚未完成
-   2. Fulfilled(已成功): 操作成功完成, 并返回一个结果.
-   3. Rejected(已失败): 操作失败, 并返回一个原因

一旦`Promise` 从 `Pending`状态变为`Fulfilled`或`Rejceted`,状态就不可再改变

## 基础语法

创建一个 Promise

```js
let promise = new Promise((resolve, reject) => {
    // 异步操作
    let success = true;
    if (success) {
        resolve("操作成功"); // 将状态改为 Fulfilled
    } else {
        reject("操作失败"); // 将状态改为 Rejected
    }
});
```

## 使用 .then() .catch()和 .finally()

-   .then(onFulfilled, onRejected): 接收两个回调函数,第一个是操作成功时的回调,第二个是操作失败时的回调
-   .catch(onRejected): 处理`Promise`被拒绝的情况,相当于 `.then(null,onRejected)`
-   .finally(callback): 无论`Promis`最终是`Fulfilled`还是`Rejected`,都会执行`callback`,但不会影响最终的结果

### 示例

```js
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("操作成功"); // 模拟异步操作
    });
});

promise
    .then((result) => {
        console.log(result); // 输出 "操作成功"
    })
    .catch((error) => {
        console.error(error); // 处理错误
    })
    .finally(() => {
        console.log("操作完成, 无论成功还是失败"); // 总会执行
    });
```

## Promise 链式调用

Promise 的一个重要特性就是链式调用. `then()` 和 `catch()`方法都会返回一个新的`Promise`对象,这使得可以连续调用`.then()`来处理多个异步操作

```js
let promise = new Promise((resolve, reject) => {
    resolve(1);
});

promise
    .then((result) => {
        console.log(result); // 输出: 1
        return result * 2; // 返回新的 Promise, 值为2
    })
    .then((result) => {
        console.log(result); // 输出: 2
        return result * 2; // 返回新的 Promise, 值为6
    })
    .then((result) => {
        console.log(result); // 输出: 6
    });
```

## Promise 的静态方法

1. Promise.resolve(value): 返回一个状态为`Fulfilled`的`Promise`对象, 值为`value`
2. Promise.reject(reason): 返回一个状态为`Rejected`的`Promise`对象, 原因是`reason`
3. Promise.all(iterable): 接收一个包含多个`Promise`的数组,当所有的`Promise`都为`Fulfilled`时,返回一个新的`Promise`,值所有`Promise`的结果数组;如果有一个`Promise`为`rejected`,则返回第一个`Rejected`原因

```js
Promise.all([Promis.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
    (results) => {
        console.log(results); // 输出 [1,2,3]
    }
);
```

4. Promise.race(iterable): 接收一个包含多个`Promise`的数组,返回第一个`Fulfilled`或`Rejected`的`Promise`的结果

```js
Promise.rece([
    Promise.resolve(1),
    new Promise((resolve) => setTimeout(resolve, 100, 2)),
]).then((result) => {
    console.log(result); // 输出: 1 (因为第一个 Promise 更快 Fulfilled)
});
```

5. Promise.allSetted: Promise.allSetted 会等待所有任务完成,无论成功还是失败.它会返回每个任务的结果,包括成功或失败的状态

```js
async function fetchData(url, shouldFail = false) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (shouldFail) {
                reject(`Error fetching data from ${url}`);
            } else {
                resolve(`Data from ${url}`);
            }
        }, 1000);
    });
}

async function fetchAllDataWithAllSetted() {
    const urls = [
        fetchData("https://api.example.com/1"),
        fetchData("https://api.example.com/2", true), // 这个请求会报错
        fetchData("https://api.example.com/3"),
    ];
    const results = await Promise.allSetted(urls);
    results.forEach((result, index) => {
        if (result.status === " Fulfilled") {
            console.log(`Request ${index + 1} succeeded:`, result.value);
        } else {
            console.error(`Request ${index + 1} failed:`, result.reason);
        }
    });
}

fetchAllDataWithAllSetted();
```

## 总结

-   Promise 是一种管理异步操作的方式, 它帮助避免 "回调地狱"
-   通过 `.then()` , `.catch()` , `.finally()` 方法可以处理异步操作的结果或错误
-   Promise 提供了静态方法如`Promise.all()`和 `Promise.rece()`,让我们可以更方便的处理多个异步任务

使用 `Promise` 可以让异步代码更易于阅读和维护
