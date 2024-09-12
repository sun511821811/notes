# 字符串方法

JavaScript 提供了许多内置的字符串方法,用于操作字符和处理字符串.

-   `length` 属性

    返回字符串的长度

    ```javascript
    const str = "Hello World!";
    console.log(str.length); // 输出 12
    ```

-   `charAt(index)`

    返回指定索引处的值

    ```javascript
    const str = "Hello World!";
    console.log(str.charAt(12)); // '!'
    ```

-   `indexOf(substring,fromIndex)`

    返回字符串在字符串中的首次出现的索引,如果未找到则返回 `-1`

    ```JavaScript
    const str = 'Hello World'
    console.log(str.indexof('H')) // 输出 0
    console.log(str.idnexOf('d',5)) // 从索引 5 开始查找 输出 10
    ```

-   `lastIndexOf(substring,fromIndex)`

    返回字符在字符串中的最后一次出现的索引

    ```JavaScript
    const str = 'Hello World'
    console.log(str.lastIndexOf('o')) // 输出 7
    ```

-   `slice(start,end)`

    提取字符串的一部分,返回新的字符串

    ```JavaScript
    const str = 'Hello World'
    console.log(str.slice(3,7)) // 输出 'lo Wo'
    console.log(str.slice(-5)) // 输出 'World'
    ```

-   `substring(start,end)`

    返回两个索引之间字符串, `end` 不包括在内

    ```JavaScript
    const str = 'Hello World'
    console.log(str.substring(0,5)) // 'Hello'
    console.log(str.substring(7)) // 'World'
    ```

-   `substr(start,end)`

    从指定的位置开始,返回指定长度的子字符串

    ```JavaScript
    const str = 'Hello World'
    console.log(str.substr(2,3)) // 输出 'llo'
    ```

-   `toUpperCase()` 和 `toLowerCase()`

    将字符串转为大写或小写

    ```javascript
    const str = "Hello World";
    console.log(str.toUpperCase()); // 'HELLO WORLD'
    console.log(str.toLowerCase()); // 'hello world'
    ```

-   `trim()`

    去除字符串两端的字符串

    ```javascript
    const str = " Hello World ";
    console.log(str.trim()); // 'Hello World'
    ```

-   `replace(searchValue,newValue)`

    替换字符串中的子字符串

    ```JavaScript
    const str = "Hello World"
    console.log(str.replace('World','JavaScript')) // 输出 'Hello JavaScript'
    ```

-   `split(separator,limit)`

    根据指定的分隔符将字符串分割成数组

    ```JavaScript
    const str = "Hello World"
    console.log(str.split(' ')); //['Hello','World']
    ```

-   `includes(substring,formIndex)`

    检查字符串中是否包含指定的子字符串

    ```JavaScript
    const str = "Hello World"
    console.log(str.includes('Hello')) // 输出 true
    console.log(str.includes('world'))  // 输出 false (大小写敏感)
    ```

-   `startsWith(substring,position)`

    检查字符串是否已指定的子字符串开头

    ```JavaScript
    const str = 'Hello World'
    console.log(str.startsWith('Hello')) // true
    console.log(str.startsWith('World',6)) // true
    ```

-   `endsWith(substring,position)`

    检查字符串是否已指定的子字符串结尾

    ```JavaScript
    const str ='Hello World'
    console.log(str.endsWith('World')) // true
    console.log(str.endsWith('lo',7)) // true
    ```
