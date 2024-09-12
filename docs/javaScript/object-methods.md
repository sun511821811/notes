# 对象的方法

在 JavaScript 中, 对象的方法是对象相关联的函数, 用于执行特定的操作或提供特定的功能.

## 定义对象方法的方式

-   方法定义在对象字面量中:

    ```javascript
    const preson = {
        name: "Alice",
        sayHello: function () {
            return "Hello, I am " + this.name;
        },
    };

    console.log(preson.sayHello()); // print "Hello, I am Alice"
    ```

-   使用对象的构造函数定义方法:

    ```javascript
    function Preson(name) {
        this.name = name;
        this.sayHello = () => {
            console.log(`Hello , I'm ${this.name}`);
        };
    }
    const preson1 = new Preson("Bob");
    preson.sayHello(); // print "Hello, I'm Bob"
    ```

-   方法中的 `this`

    在方法中, `this`关键字的值取决于调用方法的上下文.

    ```javascript
    function greet() {
        return "Hello, " + this.firstName;
    }

    const preson = {
        firstName: "Bob",
    };

    const boundGreet = greet.bind(preson);
    console.log(boundGreet()); // print "Hello, Bob"
    ```

-   方法作为对象的属性

    对象中的方法可以被当做属性进行操作,赋值,删除

    ```javascript
    const preson = {
        firstName: "John",
        lastName: "Doe",
        greet: function () {
            return "Hello, " + this.firstName + "!";
        },
    };

    // 赋值给一个新的变量
    const greetFunction = preson.greet;
    console.log(greetFunction()); // 注意: 此时的 this 不在指向 preson 对象,可能会导致错误

    // 正确调用方式
    console.log(preson.greet()); // 输出 "Hello, John!"

    // 删除方法
    delete preson.greet;
    console.log(preson.greet()); // 输出 undefined
    ```
