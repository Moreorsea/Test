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
    if (index < element.length -1) {

      console.log(element[index]);
      currentElement = element[index].offsetWidth;
      console.log(currentElement);
      var newElement = element[index+1].offsetWidth;
      wrapperShift = wrapperShift - (currentElement/2 + newElement/2);
      console.log(wrapperShift);
      wrapper.style.transform = `translateX(${wrapperShift}px)`;
        if(index < 6) {
          element[index].style.opacity = '0';
          element[index + 1].style.opacity = '1';
          element[index + 2].style.opacity = '1';
          if (index === 6) {
            element[index].style.opacity = '1';
            element[index + 1].style.opacity = '1';
          }
        }
      index++;
    }
  });

  var indexBack = element.length -1;
  console.log(indexBack);
  left.addEventListener('click', function() {
  wrapperShift = wrapperShift + element[indexBack].offsetWidth/2 + element[indexBack - 1].offsetWidth/2;
    console.log(wrapperShift);
    wrapper.style.transform = `translateX(${wrapperShift}px)`;
    element[indexBack].style.opacity = '0';
    element[indexBack - 1].style.opacity = '1';
    element[indexBack -2].style.opacity = '1';
    if (indexBack === 1) {
      element[indexBack].style.opacity = '1';
      element[indexBack + 1].style.opacity = '1';
    }
    indexBack--;
});

  container.style.transition = `ease ${speedAnimation}ms`;
};

getContainer('.wrapper', '.left', '.right', 800);
