document.documentElement.style.fontSize = document.documentElement.clientWidth / 37.5 + 'px';
//clientWidth = width+左右padding 
//设计稿主要是以iphone6为基准 iPhone上的16px ->10px  375/37.5 = 10px  只适应于手机端
window.addEventListener('load', function () {
  FastClick.attach(document.body);
  //用来解决手机端点击300ms的延迟问题
}, false);

//阻止多触点
document.documentElement.addEventListener('touchmove', function (event) {
  if (event.touches.length > 1) {
  	event.preventDefault();
  }
}, false);