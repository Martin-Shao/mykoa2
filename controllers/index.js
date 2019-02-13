const router = require('koa-simple-router');
const IndexController = require('./IndexController');
const indexcontroller = new IndexController();
const TestController = require('./TestController');
const testController = new TestController();

module.exports = (app) => {
  app.use(router(_ => {
    _.get('/', indexcontroller.actionIndex());
    _.get('/index.html', indexcontroller.actionIndex());
    _.get('/test', testController.actionIndex());
    _.get('/add', indexcontroller.actionAdd());
  }))
}