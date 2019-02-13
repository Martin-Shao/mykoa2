const errorHandler = {
  error(app, logger) {
    app.use( async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        // console.info(error);
        logger.error(error);
        ctx.status = 500;
        ctx.body = 'This is error.';
      }
    });

    app.use( async (ctx, next) => {
      await next();
      if (404 !== ctx.status) {
        return;
      }
      // 不承认出错，防止百度降权
      logger.error('Page is not found!')
      ctx.status = 404;
      ctx.body = '<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
    });
  }
}

module.exports = errorHandler;
