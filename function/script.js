'use strict';

var element = document.querySelectorAll('.container');
var wrapper = document.querySelector('.wrapper');
console.log(element.length);
//функция (контейнер, кнопки, длительность анимации)
var getContainer = function(selectorContainer, buttonLeft, buttonRight, speedAnimation) {
  var container = document.querySelector(selectorContainer);
  console.log(container);

  var index = 0;
  var left = document.querySelector(buttonLeft);
  var right = document.querySelector(buttonRight);
  var wrapperShift = wrapper.offsetWidth/2 - element[index].offsetWidth/2;
  console.log(wrapperShift);
  wrapper.style.transform = `translateX(${wrapperShift}px)`;
  var currentElement = 0;

  right.addEventListener('click', function(){
    if (index < element.length) {
      console.log(element[index]);
      currentElement = element[index].offsetWidth;
      console.log(currentElement);
      var newElement = element[index+1].offsetWidth;
      wrapperShift = wrapperShift - (currentElement/2 + newElement/2);
      console.log(wrapperShift);
      wrapper.style.transform = `translateX(${wrapperShift}px)`;
      index++;
    }
  });

  var indexBack = element.length -1;
  console.log(indexBack);
  left.addEventListener('click', function() {
  wrapperShift = wrapperShift + element[indexBack].offsetWidth/2 + element[indexBack - 1].offsetWidth/2;
    console.log(wrapperShift);
    wrapper.style.transform = `translateX(${wrapperShift}px)`;
    indexBack--;
});

  container.style.transition = `ease ${speedAnimation}ms`;
};

getContainer();
