<p align="center">
  <a href="https://github.com/estoi/electron-qq" target="_blank">
    <img width="180" src="./src/assets/images/readme/product-icon.png" alt="logo">
  </a>
</p>

<p align="center">
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.x-brightgreen.svg" alt="vue">
  </a>
  <a href="https://cn.vitejs.dev/">
    <img src="https://img.shields.io/badge/vite-5.x-blue" alt="vite">
  </a>
  <a href="https://www.electronjs.org/zh/">
    <img src="https://img.shields.io/badge/electron-29.0-brightgreen" alt="electron">
  </a>
   <a href="https://pinia.vuejs.org/">
    <img src="https://img.shields.io/badge/pinia-2.x-brightgreen" alt="pinia">
   </a>
   <a href="https://varlet.gitee.io/varlet-ui/#/zh-CN/index">
    <img src="https://img.shields.io/badge/varlet/ui-3.x-blue" alt="varlet-ui">
   </a>
   <a href="https://unocss.dev/">
    <img src="https://img.shields.io/badge/unocss-0.58.7-blue" alt="unocss">
   </a>
   <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/typescript-5.2.2-blue" alt="typescript">
   </a>
   <a href="https://bun.sh/">
    <img src="https://img.shields.io/badge/bun-1.0.29-blue" alt="bun">
   </a>
   
</p>

> 一个基于`Electron+Vite+Vue3`开发的QQ9的高仿版客户端

## 简介

QQ9的高仿版, 欢迎Star

项目目的:

- 学习vue3+ts
- 学习electron
- 学习unocss
- 等等...

## 功能

```text
- 登录
- 聊天(开发中)
- 其他待开发
```

## 截图

<img width="300" src="./src/assets/images/readme/login.png">
<img width="400" src="./src/assets/images/readme/home-1.png">
<img width="400" src="./src/assets/images/readme/chat.png">
<img width="400" src="./src/assets/images/readme/chat-2.png">

## 目录结构

```
├─ .eslintrc.json     # eslint
├─ .prettierrc.cjs    # prettier
├─ README.md
├─ dist               # 打包dist
├─ mock               # mock服务
├─ public             # 静态资源
├─ types              # ts 声明
├─ src                # 源码
│  ├─ assets          # 静态资源
│  ├─ components      # 公共组件
│  ├─ layout          # 全局Layout
│  ├─ router          # 路由
│  ├─ store           # 全局store管理
│  ├─ utils           # 全局公共方法
│  └─ views           # 所有业务页面
├─ bunfig.toml        # bun 下载源
├─ tsconfig.json      # ts 编译配置
├─ unocss.config.ts   # unocss 配置
└─ vite.config.ts     # vite 配置
```

## 启动项目

```bash
bun run dev
```

## License

[MIT](https://github.com/estoi/electron-qq/blob/master/LICENSE)

Copyright (c) 2024-present 
