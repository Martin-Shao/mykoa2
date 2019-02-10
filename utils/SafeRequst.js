const fetch = require('node-fetch');
const config = require('../config');

class SafeResquest{
  constructor(url) {
    this.url = url;
    this.baseUrl = config.baseUrl;
  };
  fetch(options) {
    let ydFecth = fetch(this.baseUrl + this.url);
    return new Promise((resolve, reject) => {
      let result = {
        code: 0,
        message: '',
        data: []
      }
      ydFecth.then(res=> {
        return res.json()
      }).then(json => {
        result.data = json;
        resolve(result);
      }).catch(error => {
        result.code = 1;
        result.message = 'node-fetch与后端通讯异常';
      })
    })
  }
}

module.exports = SafeResquest;