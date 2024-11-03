# React 基础

## 组件

-   类组件

```jsx
import React, { Component } from "react";

class Welcome extends Component {
    render() {
        return <h1>Hello</h1>;
    }
}
```

-   函数组件

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
```

## 状态管理

状态（State）与属性（Props

-   `Props`（属性）是从父组件传递到子组件的数据，只读不可修改。
-   `State`（状态）是组件内部管理的数据，通常用于控制组件内部的动态内容。通过 useState 钩子可以轻松定义状态。

```jsx
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleIncrement}>Increment</button>
            </div>
        );
    }
}
```

## 事件处理

在 React 中使用 `onClick`、`onChange` 等事件来处理用户交互。React 事件处理函数的书写方式与 HTML 不同，需要使用驼峰命名（如 `onClick` 而不是 `onclick`）。

```jsx
function ActionLink() {
    function handleClick(e) {
        e.preventDefault();
        console.log("The link was clicked.");
    }

    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    );
}
```

## 组件传参

-   父组件

```tsx
import { useState } from "react";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";

type Person = {
    name: string;
    age: number;
};

function App(): JSX.Element {
    const [person, setPerson] = useState<Person>({ name: "李白", age: 30 });

    const updatePerson = (updatedPerson: Partial<Person>) => {
        setPerson((prevPerson) => ({ ...prevPerson, ...updatedPerson }));
    };

    return (
        <>
            <FunctionComponent person={person} setPerson={updatePerson} />
            <ClassComponent person={person} setPerson={updatePerson} />
        </>
    );
}

export default App;
```

-   类组件

```tsx
import React, { Component } from "react";

type ClassComponentProps = {
    person: {
        name: string;
        age: number;
    };
    setPerson: (updatedPerson: Partial<{ name: string; age: number }>) => void;
};

class ClassComponent extends Component<ClassComponentProps> {
    handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setPerson({ name: e.target.value });
    };

    handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setPerson({ age: Number(e.target.value) });
    };

    render() {
        const { person } = this.props;
        return (
            <div>
                <span>名字: {person.name}</span>
                <span>年龄: {person.age}</span>
                <input
                    type="text"
                    value={person.name}
                    onChange={this.handleNameChange}
                    placeholder="修改名字"
                />
                <input
                    type="number"
                    value={person.age}
                    onChange={this.handleAgeChange}
                    placeholder="修改年龄"
                />
            </div>
        );
    }
}

export default ClassComponent;
```

-   函数组件

```tsx
import React from "react";

type FunctionComponentProps = {
    person: {
        name: string;
        age: number;
    };
    setPerson: (updatedPerson: Partial<{ name: string; age: number }>) => void;
};

export default function FunctionComponent({
    person,
    setPerson,
}: FunctionComponentProps): JSX.Element {
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerson({ name: e.target.value });
    };

    const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPerson({ age: Number(e.target.value) });
    };

    return (
        <div>
            <span>名字: {person.name}</span>
            <span>年龄: {person.age}</span>
            <input
                type="text"
                value={person.name}
                onChange={handleNameChange}
                placeholder="修改名字"
            />
            <input
                type="number"
                value={person.age}
                onChange={handleAgeChange}
                placeholder="修改年龄"
            />
        </div>
    );
}
```
