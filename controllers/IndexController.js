const Index = require('../models/Index');

class IndexController {
  constructor(){};
  actionIndex() {
    return async (ctx, next) => {
      // ctx.body = 'hello'
      const index = new Index();
      const result = await index.getData();
      console.info(result);
      ctx.body = await ctx.render('index', {
        data: result.data
      });
    }
  }
}

module.exports = IndexController;