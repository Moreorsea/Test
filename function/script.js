'use strict';

var element = document.querySelectorAll('.container');
var wrapper = document.querySelector('.wrapper');
var circle = document.querySelectorAll('.circle');
console.log(element.length);
//функция (контейнер, кнопки, длительность анимации)
var getContainer = function(selectorContainer, buttonLeft, buttonRight, speedAnimation) {
  var container = document.querySelector(selectorContainer);
  console.log(container);
  container.style.width = '500vw';

  var index = 0;
  var left = document.querySelector(buttonLeft);
  var right = document.querySelector(buttonRight);
  right.addEventListener('click', function() {
    left.style.display = 'block';
    rigth.style.left = '24%';
  if (index < element.length - 1) {
    index++;
    if(index === element.length -1) {
      right.style.display = 'none';
    }
  }
  var sum = -100 * index;
  console.log(sum);
    container.style.transform = `translateX(${sum}vw)`;
  });

  var indexBack = element.length -1;
  left.addEventListener('click', function() {
    indexBack--;
    right.style.display = 'block';
     var sumBack = -100 * indexBack;
    container.style.transform = `translateX(${sumBack}vw)`;
  if (indexBack === 0) {
    left.style.display = 'none';
  }
});

  container.style.transition = `ease ${speedAnimation}ms`;
};

getContainer('.wrapper', '.left', '.right', 800);
