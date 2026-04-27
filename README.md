# 学习通-习概课程助手

## 项目介绍

这是一个基于油猴脚本（UserScript）的学习通课程辅助工具，旨在简化学习通平台的使用体验。

## 功能特性

- 自动执行课程相关操作
- 简化学习流程
- 提高学习效率

## 安装方法

### 1. 安装油猴插件

首先，在你的浏览器中安装油猴插件：

- **Chrome/Edge**：[Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
- **Firefox**：[Greasemonkey](https://addons.mozilla.org/zh-CN/firefox/addon/greasemonkey/) 或 [Tampermonkey](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/)
- **Safari**：[Tampermonkey](https://apps.apple.com/us/app/tampermonkey/id1482490089)

### 2. 安装脚本

#### 方法一：直接安装

1. 访问 `dist/auto-course.user.js` 文件
2. 点击文件，浏览器会自动弹出油猴插件的安装界面
3. 点击「安装」按钮完成安装

#### 方法二：手动导入

1. 复制 `dist/auto-course.user.js` 文件的内容
2. 打开油猴插件管理界面
3. 点击「添加新脚本」
4. 将复制的内容粘贴到编辑器中
5. 点击「文件」→「保存」完成安装

## 开发指南

### 环境要求

- Node.js 16.0 或更高版本
- pnpm（推荐）或 npm、yarn

### 初始化项目

1. 克隆项目到本地

```bash
git clone <项目地址>
cd auto-course
```

2. 安装依赖

```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 开发流程

1. 启动开发服务器

```bash
pnpm dev
# 或 npm run dev
# 或 yarn dev
```

2. 在浏览器中打开油猴插件管理界面
3. 点击「添加新脚本」
4. 将 `http://localhost:5173/auto-course.user.js` 粘贴到编辑器中并保存
5. 访问学习通网站 `https://mooc1.chaoxing.com/` 查看效果

### 构建生产版本

```bash
pnpm build
# 或 npm run build
# 或 yarn build
```

构建完成后，脚本会生成在 `dist/auto-course.user.js` 文件中。

## 项目结构

```
auto-course/
├── src/                # 源代码目录
│   ├── main.js         # 脚本主入口
│   └── vite-env.d.ts   # Vite 类型声明文件
├── dist/               # 构建输出目录
│   └── auto-course.user.js  # 生成的油猴脚本
├── .gitignore          # Git 忽略文件
├── package.json        # 项目配置和依赖
├── pnpm-lock.yaml      # pnpm 依赖锁定文件
├── vite.config.js      # Vite 配置文件
└── README.md           # 项目说明文档
```
