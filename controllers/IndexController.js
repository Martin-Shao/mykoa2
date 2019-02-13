const Index = require('../models/Index');

class IndexController {
  constructor(){};
  actionIndex() {
    return async (ctx, next) => {
      // ctx.body = 'hello'
      const index = new Index();
      const result = await index.getData();
      ctx.body = await ctx.render('index', {
        data: result.data
      });
    }
  };
  actionAdd() {
    return async (ctx, next) => {
      ctx.body = await ctx.render('add');
    }
  }
}

module.exports = IndexController;