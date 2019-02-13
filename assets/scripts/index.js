console.info('project init is success!!!');

console.info('........');

fetch('/test').then(res => {
  return res.json()
}).then(res => {
  console.info('🍌¥🍎', res);
  document.getElementById('test').innerHTML = res.data;
})