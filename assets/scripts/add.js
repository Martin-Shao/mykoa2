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
    this.btn.click(function() {
      console.info('shaogucheng is cooleast');
    });
  }
}
// const cfm = new Create();
// cfm.fn();
export default Create;
