var co = require('co');
const Koa = require('koa');
const path = require('path');
const log4js = require('log4js');
const render = require('koa-swig');
const serve = require('koa-static');
const errorHandler = require('./middlewares/errorHandler');

const config = require('./config/index');

const app = new Koa();

app.use(serve(config.staticDir));

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

app.context.render = co.wrap(render({
  root: path.join(config.viewDir),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
  writeBody: false
}));

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

errorHandler.error(app, logger);
require('./controllers')(app);
app.listen(config.port, () => {
  console.info('The server is starting...🍎🍌');
});
console.log('\x1b[44m \x1b[33m NODE_ENV \x1b[0m', `.........${ process.env.NODE_ENV }`);
