import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/notes/",
    title: "前端笔记",
    description:
        "欢迎来到前端爱好者学习笔记！这是一个专为热爱前端开发的学习者和从业者打造的知识宝库，无论你是初学者，还是已有一定经验的开发者，这里都能找到适合你的内容。",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "首页", link: "/" },
            { text: "介绍", link: "/Introduction-notes" },
        ],

        sidebar: [
            {
                text: "简介",
                collapsed: true,
                items: [{ text: "介绍", link: "/Introduction-notes" }],
            },
            {
                text: "基础",
                collapsed: true,
                items: [
                    { text: "HTML", link: "/Basic-notes/HTML" },
                    { text: "CSS", link: "/Basic-notes/CSS" },
                    {
                        text: "JavaScript",
                        collapsed: true,
                        items: [
                            {
                                text: "this指针",
                                link: "/javaScript/this",
                            },
                            {
                                text: "闭包",
                                link: "/javaScript/closure",
                            },
                            {
                                text: "作用域",
                                link: "/javaScript/scope",
                            },
                            {
                                text: "事件循环",
                                link: "/javaScript/event-loop",
                            },
                            {
                                text: "面向对象",
                                link: "/javaScript/object-oriented",
                            },
                            {
                                text: "原型以及原型链",
                                link: "/javaScript/prototype-chain",
                            },
                            {
                                text: "Promise",
                                link: "/javaScript/promise",
                            },
                            {
                                text: "async/await",
                                link: "/javaScript/async-await",
                            },
                        ],
                    },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
});
