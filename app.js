/**
 * @fileoverview 基于Koa2的服务端应用开发
 * @author shaogucheng
 * @description app.js 项目启动文件
 */

// 引入项目需要的模块
const co = require('co');
const Koa = require('koa');
const path = require('path');
const log4js = require('log4js');
const render = require('koa-swig');
const serve = require('koa-static');
const errorHandler = require('./middlewares/errorHandler');
const config = require('./config/index'); // 这个是配置

const app = new Koa(); // koa实例

app.use(serve(config.staticDir)); // 静态资源的引用

// 日志管理，逻辑和业务错误日志，http日志
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs/cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

const logger = log4js.getLogger('cheese');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');

// 前端模版的使用和配置
app.context.render = co.wrap(render({
  root: path.join(config.viewDir),
  autoescape: true,
  cache: config.cacheMode, // disable, set to false
  ext: 'html',
  varControls: ['[[', ']]'],
  writeBody: false
}));

// 路由调用时间统计
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// 容错处理
errorHandler.error(app, logger);

// 路由控制，这里负责注册路由
require('./controllers')(app);

// 监听端口
app.listen(config.port, () => {
  console.info('The server is starting...🍎🍌');
});
console.log('\x1b[44m \x1b[33m NODE_ENV \x1b[0m', `.........${ process.env.NODE_ENV }`);
