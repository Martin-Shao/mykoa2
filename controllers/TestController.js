class TestController {
  constructor() {};
  actionIndex() {
    return async (ctx, next) => {
      ctx.body = {
        data: 'Hello TestController'
      }
    }
  };
}

module.exports = TestController;