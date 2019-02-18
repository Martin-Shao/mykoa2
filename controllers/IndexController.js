const Index = require('../models/Index');
const { URLSearchParams } = require('url')

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
  };
  actionSave() {
    return async (ctx, next) => {
      const index = new Index();
      const params = new URLSearchParams();
      params.append("Country[code]", "EG");
      params.append("Country[country]", "Egypt");
      params.append("Country[population]", 12120201);
      const result = await index.saveData({
        params
      });
        ctx.body = result;
    }
  };
}

module.exports = IndexController;