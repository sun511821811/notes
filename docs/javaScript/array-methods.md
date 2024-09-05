# 数组方法

数组方法是 `javascript` 中处理数组数据的强大工具

## 添加和删除元素

-   push(): 向数组的末尾添加一个或多个元素

```js
let arr = [1, 2, 3];
arr.push(4, 5); // [1, 2, 3, 4, 5]
```

-   pop(): 从数组末尾删除一个元素,并返回输出的元素

```js
let arr = [1, 2, 3];
const last = arr.pop(); // 3
```

-   unshift(): 向数组的开头添加一个或者多个元素

```js
let arr = [1, 2, 3];
arr.unshift(5); //[ 5, 1, 2, 3]
```

-   shift(): 从数组开头删除一个元素 ,并返回删除的元素

```js
let arr = [1, 2, 3];
const first = arr.shift(); // 1
```

## 复制和切割数组

-   slice(start,end): 返回数组的前拷贝的一部分,原数组不受影响,

```js
let arr = [1, 2, 3, 4];
const newArr = arr.slice(1, 3); // [2 ,3]
```

-   splice(start, deleteCount, item1, item2, /_…,_/ itemN): 从数组中添加,删除或者替换元素,改变原数组

```js
let arr = [1, 2, 3, 4];
arr.splice(2, 1, 10, 15); // [ 1, 2, 10 , 15, 4]
```

## 查找和检测

-   indexOf(): 返回数组中第一次出现指定元素的下标,如果不存在返回-1

```js
let arr = [1, 2, 3, 4, 2];
arr.indexOf(2); // 1
```

-   find(): 返回数组中第一个符合条件的元素

```js
let arr = [1, 2, 3, 4];
arr.find((x) => x > 2); // 3
```

-   findIndex(): 返回数组第一个符合条件的下标

```js
let arr = [1, 2, 3, 4];
arr.findIndex((x) => x > 2); // 2
```

-   includes(): 检查数组是否包含某个值,返回布尔值

```js
let arr = [1, 2, 3, 4];
arr.includes(4); // true
```

## 遍历

-   forEach(): 对数组的每一个元素执行一次提供的函数

```js
let arr = [1, 2, 3, 4];
arr.forEach((a) => console.log(a)); // 1,2,3,4
```

-   map(): 创建一个新数组,数组的每个元素都是调用一次提供的函数的结果

```js
let arr = [1, 2, 3, 4];
const newArr = arr.map((a) => a * 2); // [ 2, 4, 6, 8]
```

-   filter(): 创建一个新数组,包含所有通过测试的元素

```js
let arr = [1, 2, 3, 4];
const newArr = arr.filter((a) => a % 2 === 0); // [2, 4]
```

-   ruduce(): 对数组中的每个元素应用一个函数,返回单个值

```js
let arr = [1, 2, 3, 4];
arr.ruduce((arr, curr) => acc + curr, 0); // 10
```

-   reduceRight(): 从数组的最后一个元素开始, 对每个数组应用一个函数,返回单个值

```js
let arr = [1, 2, 3, 4];
arr.rudeceRight((acc, curr) => acc + curr, 0); // 10
```

## 其他方法

-   concat(): 来接两个或多个数组,返回一个新数组

```js
let arr = [1, 2];
let arr1 = [1, 2, 3];
const combined = arr.concat(arr1); // [1,2,3,1,2,3]
```

-   join(): 将数组的所有元素连接成一个字符串

```js
let arr = [1, 2, 3];
arr.join("-"); // 1-2-3
```

-   sort(): 对数组的元素进行排序并返回数组

```js
let arr = [7, 5, 8, 4];
arr.sort(); //[4, 5, 7, 8]
```

-   reverse(): 反转数组的元素顺序并返回数组

```js
let arr = [1, 2, 3];
arr.reveres(); // [3, 2, 1]
```

-   flat(层级): 将多维数组 "拉平" 称一堆数组

```js
let arr = [1, [2, [3, [4]]]];
let flatArr = arr.flat(3); // [1, 2, 3, 4]
```

-   flatMap(): 先映射每个元素,然后将结果压平

```js
let arr = [1, 2, 3];
let flatMapArr = arr.flatMap((a) => [a, a * 2]); // [1, 2, 2, 4, 3, 6 ]
```
