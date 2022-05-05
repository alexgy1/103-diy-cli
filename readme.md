## diy cli

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
