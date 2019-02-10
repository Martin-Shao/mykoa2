/**
 * @fileoverview 实现index的数据模型
 * @author 邵孤城
 */


const SafeRequest = require('../utils/SafeRequst.js');

/**
 *  Index类 获取后台关于图书相关的数据类
 * @class
 */
class Index {

  /**
   *Creates an instance of Index.
   * @param {string} app koa2的执行上下文
   * @memberof Index
   * @constructor
   */
  constructor(app) { }

  /**
   * 获取后台全部图书的方法
   *
   * @param {*} options 配置项
   * @memberof Index
   * @example
   * return new Promise
   * getData(options)
   */
  getData(options) {
    const safeRequest = new SafeRequest('country/index');
    return safeRequest.fetch();
  }
}

module.exports = Index;