# 原型以及原型链

## 1. 原型(**prototype**)

在 `javaScript` 中,每一个对象都有一个与之关联的对象,称之为`原型`. 一个对象可以从它的原型继承属性和方法,这个关联的原型对象可以通过对象的`__proto__`属性访问(不推荐直接使用,推荐使用`object.getPrototypeof()`)

## 2. 构造函数与原型

每个构造函数都一个`prototype`属性,这个属性是一个对象,其中包含了该构造函数实例共享的属性和方法,当你使用`new`关键字创建对象时,构造函数函数的`prototype`对象会成为新对象的原型

```js
function Preson(name) {
    this.name = name;
}
Preson.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}`);
};
const john = new Preson("John");
john.sayHello(); // => "Hello my name is john"
```

在这个例子中,`Preson`是一个构造函数,而`Preson.prototype` 是该构造函数的原型对象,它包含了`sayHello`方法. `jhon`是`Preson`的一个实例,它继承了`Preson.prototype`上的方法.

## 3. 原型链(**prototype Chain**)

原型链是指对象通过`__proto__`连接到他的原型,并且这个原型也有自己的原型,层层相连形成的链条.这就是`javaScript`中对象的继承模型.

-   顶端原型: 原型链的顶端是`object.prototype`,它的原型是`null`,也就是没有更高一级的原型

-   查找过程: 当访问对象的属性时,`javaScript`引起会首先检查对象自身的属性,如果找不到,就会沿着原型链向上查找,直到找到目标属性或者达到原型链的顶端.

## 4. 原型链中的方法覆盖

当一个对象的原型链中存在同名的方法,离当前对象最近的原型中的方法会被调用

```js
function Animal() {}
Animal.prototype.eat = function () {
    console.log("Animal is eating");
};
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.eat = function () {
    console.log("Dog is eating");
};

const myDog = new Dog();
myDog.eat(); // 输出: "Dog is eating"
```

在这个例子中,`Dog`覆盖了从`Animal`继承的`eat`方法

## 5. 原型链的性能

-   查找一个属性时,会沿着原型链逐级向上查找,因此过长的原型链可能会导致性能问题
-   为了避免原型链过长,推荐尽量减少继承层级

## 6. `__proto__`和`prototype`的关系

```js
function Preson(name) {
    this.name = name;
}
const preson = new Preson("Alice");

// preson.prototype.__proto__指向Preson.prototype
console.log(preson.prototype.__proto__ === Preson.prototype); // true

// Preson.prototype.__proto__指向Object.prototype
console.log(Preson.prototype.__proto__ === Object.prototype); // true

// Object.prototype.__proto__ 指向 null
console.log(Object.prototype.__proto__ === null); // true
```

## 7. 总结

-   原型的对象是另一个对象,包含这个对象可以继承的属性和方法
-   原型链是对象通过原型连接形成的继承链
-   继承关系通过原型链表现,每一个对象`__proto__`属性指向它的原型对象,最终指向`Object.prototype`,原型链的顶端的原型是`null`.
