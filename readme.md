## diy cli

> 每执行一次 diy-cli， 就会生成一次 lib/templates 里面预定义好的内容， 快速搭建项目基础目录用

## dependiences

```js
"dependencies": {
    "ejs": "^3.1.7", //模版引擎
    "inquirer": "^8.2.4"//命令行的方式获取用户输入的内容
  }
```

## lib/templates 目录下

- 可以定义重复的模版，vue 项目。react 项目的基础结构等等。

## 如何使用？

- 本地 `yarn link` 以后， 新建任意一个目录。 目录内执行`diy-cli`目录内就会生成 templates 里面预先定义好的内容

## 配置 git 忽略文件

1. `git init `
2. `echo /node_modul es > .gitignore`
3. git add .
4. git commit -m'message'
5. git remote add origin git@github.com:alexgy1/103-diy-cli.git
6. git branch -M main
7. git push -u origin main
