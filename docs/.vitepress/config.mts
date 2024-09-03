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
                    {
                        text: "HTML",
                        collapsed: true,
                        items: [
                            { text: "HTML5", link: "/Basic-notes/HTML5" },
                            {
                                text: "语义化",
                                link: "/Basic-notes/semantic-html",
                            },
                            {
                                text: "结构",
                                link: "/Basic-notes/structural-html",
                            },
                            { text: "表格", link: "/Basic-notes/table-html" },
                            { text: "表单", link: "/Basic-notes/form-html" },
                            {
                                text: "媒体查询",
                                link: "/Basic-notes/media-query",
                            },
                            { text: "SVG", link: "/Basic-notes/svg" },
                            { text: "Canvas", link: "/Basic-notes/canvas" },
                            {
                                text: "WebGL",
                                link: "/Basic-notes/webgl",
                            },
                            {
                                text: "WebRTC",
                                link: "/Basic-notes/webrtc",
                            },
                            {
                                text: "WebAssembly",
                                link: "/Basic-notes/webassembly",
                            },
                            {
                                text: "Web Workers",
                                link: "/Basic-notes/web-workers",
                            },
                            {
                                text: "Web Components",
                                link: "/Basic-notes/web-components",
                            },
                            {
                                text: "Service Workers",
                                link: "/Basic-notes/service-workers",
                            },
                            // 本地存储和临时存储
                            {
                                text: "Web Storage",
                                link: "/Basic-notes/web-storage",
                            },
                            {
                                text: "IndexedDB",
                                link: "/Basic-notes/indexeddb",
                            },
                        ],
                    },
                    {
                        text: "CSS",
                        collapsed: true,
                        items: [
                            { text: "CSS3", link: "/Basic-notes/css3" },
                            {
                                text: "Flexbox",
                                link: "/Basic-notes/flexbox",
                            },
                            {
                                text: "Grid",
                                link: "/Basic-notes/grid",
                            },
                            {
                                text: "CSS Modules",
                                link: "/Basic-notes/css-modules",
                            },
                            {
                                text: "CSS 预处理器",
                                link: "/Basic-notes/css-preprocessors",
                            },
                            {
                                text: "CSS 后处理器",
                                link: "/Basic-notes/css-postprocessors",
                            },
                            {
                                text: "CSS 动画",
                                link: "/Basic-notes/css-animation",
                            },
                            {
                                text: "CSS 性能",
                                link: "/Basic-notes/css-performance",
                            },
                            {
                                text: "CSS 调试",
                                link: "/Basic-notes/css-debugging",
                            },
                        ],
                    },
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
                            {
                                text: "ES6+ 新特性",
                                link: "/javaScript/es6-plus",
                            },
                        ],
                    },
                ],
            },
            {
                text: "前端框架",
                collapsed: true,
                items: [
                    {
                        text: "Vue.js",
                        collapsed: true,
                        items: [
                            {
                                text: "基础",
                                link: "/Framework-notes/vue/basic",
                            },
                            {
                                text: "组件",
                                link: "/Framework-notes/vue/components",
                            },
                            {
                                text: "路由",
                                link: "/Framework-notes/vue/router",
                            },
                            {
                                text: "状态管理",
                                link: "/Framework-notes/vue/state-management",
                            },
                            {
                                text: "Vue CLI",
                                link: "/Framework-notes/vue/vue-cli",
                            },
                            {
                                text: "Vue 3.0",
                                link: "/Framework-notes/vue/vue-3.0",
                            },
                            {
                                text: "TypeScript",
                                link: "/Framework-notes/vue/typescript",
                            },
                            {
                                text: "Vue 3.0 新特性",
                                link: "/Framework-notes/vue/",
                            },
                        ],
                    },
                    {
                        text: "React.js",
                        collapsed: true,
                        items: [
                            {
                                text: "基础",
                                link: "/Framework-notes/react/basic",
                            },
                            {
                                text: "组件",
                                link: "/Framework-notes/react/components",
                            },
                            {
                                text: "状态管理",
                                link: "/Framework-notes/react/state-management",
                            },
                            {
                                text: "Redux",
                                link: "/Framework-notes/react/redux",
                            },
                            {
                                text: "React Hooks",
                                link: "/Framework-notes/react/react-hooks",
                            },
                            {
                                text: "React Router",
                                link: "/Framework-notes/react/react-router",
                            },
                            {
                                text: "TypeScript",
                                link: "/Framework-notes/react/typescript",
                            },
                            {
                                text: "React 新特性",
                                link: "/Framework-notes/react/",
                            },
                        ],
                    },
                    {
                        text: "uniapp",
                        collapsed: true,
                        items: [
                            {
                                text: "基础",
                                link: "/Framework-notes/uniapp/basic",
                            },
                            {
                                text: "组件",
                                link: "/Framework-notes/uniapp/components",
                            },
                            {
                                text: "路由",
                                link: "/Framework-notes/uniapp/router",
                            },
                            {
                                text: "状态管理",
                                link: "/Framework-notes/uniapp/state-management",
                            },
                            {
                                text: "API",
                                link: "/Framework-notes/uniapp/api",
                            },
                            {
                                text: "TypeScript",
                                link: "/Framework-notes/uniapp/typescript",
                            },
                            {
                                text: "uniapp 新特性",
                                link: "/Framework-notes/uniapp/",
                            },
                        ],
                    },
                ],
            },
            {
                text: "工具",
                collapsed: true,
                items: [
                    {
                        text: "VS Code 插件",
                        collapsed: true,
                        items: [
                            {
                                text: "Vetur",
                                link: "/Tools-notes/vscode-plugins/vetur",
                            },
                            {
                                text: "ESLint",
                                link: "/Tools-notes/vscode-plugins/eslint",
                            },
                            {
                                text: "Prettier",
                                link: "/Tools-notes/vscode-plugins/prettier",
                            },
                            {
                                text: "Markdown All in One",
                                link: "/Tools-notes/vscode-plugins/markdown-all-in-one",
                            },
                            {
                                text: "Auto Close Tag",
                                link: "/Tools-notes/vscode-plugins/auto-close-tag",
                            },
                            {
                                text: "Auto Rename Tag",
                                link: "/Tools-notes/vscode-plugins/auto-rename",
                            },
                        ],
                    },
                ],
            },
            {
                text: "后端Node",
                collapsed: true,
                items: [
                    {
                        text: "基础",
                        link: "/Backend-notes/node/basic",
                    },
                    {
                        text: "Express",
                        link: "/Backend-notes/node/express",
                    },
                    {
                        text: "Koa",
                        link: "/Backend-notes/node/koa",
                    },
                    {
                        text: "Node.js 新特性",
                        link: "/Backend-notes/node/",
                    },
                    {
                        text: "nest.js",
                        collapsed: true,
                        items: [
                            {
                                text: "基础",
                                link: "/Backend-notes/nest/basic",
                            },
                            {
                                text: "Controller",
                                link: "/Backend-notes/nest/controller",
                            },
                            {
                                text: "Service",
                                link: "/Backend-notes/nest/service",
                            },
                            {
                                text: "Module",
                                link: "/Backend-notes/nest/module",
                            },
                            {
                                text: "Pipe",
                                link: "/Backend-notes/nest/pipe",
                            },
                            {
                                text: "Validation",
                                link: "/Backend-notes/nest/validation",
                            },
                            {
                                text: "GraphQL",
                                link: "/Backend-notes/nest/graphql",
                            },
                            {
                                text: "Nest.js 新特性",
                                link: "/Backend-notes/nest/",
                            },
                        ],
                    },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/sun511821811/notes" },
        ],
    },
});
