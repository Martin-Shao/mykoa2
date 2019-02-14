function yd() { }
yd._version = 0.1;

/**
 *
 *
 * @param {*} fn 触发的事件操作
 * @param {*} delay 多少毫秒内连续触发的事件不会执行
 * @returns {Function}
 */
yd.debounce = function (fn, delay) {
  var timer;
  return function (...arg) {
    if (!timer) {
      console.info(timer);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      return fn.apply(this.arg);
    }
  }
}

/**
 *
 *
 * @param {*} method
 * @param {*} mustRunDelay
 * @returns
 */
function throttle(method, mustRunDelay) {
  let timer,
    args = arguments,
    start;
  return function loop() {
    let self = this;
    let now = Date.now();
    if (!start) {
      start = now;
    }
    if (timer) {
      clearTimeout(timer);
    }
    if (now - start >= mustRunDelay) {
      method.apply(self, args);
      start = now;
    } else {
      timer = setTimeout(function () {
        loop.apply(self, args);
      }, 50);
    }
  }
}