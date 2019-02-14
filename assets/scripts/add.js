// const app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

class Create {
  constructor() {
    this.btn = $('#js-btn');
  }
  fn() {
    this.btn.click(yd.debounce(function() {
      console.info('shaogucheng is cooleast');
    }, 2000));
  }
}
// const cfm = new Create();
// cfm.fn();
export default Create;
