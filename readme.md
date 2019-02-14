# 前后端全栈项目

## 工程简介
> 涉及SSR/CSR，`node+koa+swig`，后端接口采用restful借口，API由PHP（yii）提供或者Java（springboot+mybatis)

## 工程初始化

建好工程目录之后，执行如下命令
```bash
npm init -y

npm install supervisor -g

npm install cross-env --save

npm install koa --save

npm install koa-simple-router --save

npm install koa-swig --save

npm install co --save

npm install koa-static --save-dev

npm install log4js --save

npm install jsdoc --save-dev

npm install node-fetch --save-dev

npm install lodash --save

npm install --save-dev @babel/core @babel/cli @babel/preset-env

npm install --save-dev @babel/plugin-transform-modules-systemjs --save-dev
```

各功能模块文件夹
- assets       --->静态资源
- bin
- components   --->视图层小组件
- config       --->项目配置文件
- docs         --->项目生成注释
- controllers  --->路由控制
- middlewares  --->koa中间件
- models       --->数据模型
- tests        --->自动化测试目录
- views        --->视图层
- web          --->前后端分离
- app.js       --->项目启动文件

初始化项目，安装koa

 [koa使用请参考官方文档](https://koa.bootcss.com/)

app.js文件中新建Koa应用实例，尝试启动应用。
初始化路由，建立路由注册中心 `controllers/index.js`

## nodejs容错

了解洋葱模型

## 日志管理

## 注释文档生成

## model层代码

## utils工具箱

## config配置文件

## CSR和SSR# mykoa2

## swig模版使用和注意事项

- 注意swig的缓存机制

## exports、module.exports和export、export default区别

## babel在项目中的运用

- babel的使用
- systemJs的使用

## Mac上使用nvm管理node版本！

fsevent在Mac上安装错误的问题。。。

## 防抖和节流（函数式编程实现）

## 自动化测试--rize

