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
  //var wrapperShift = wrapper.offsetWidth/2 - element[index].offsetWidth/2;
  var wrapperShift = wrapper.offsetWidth/2 - (element[index].offsetWidth + element[index + 1].offsetWidth)/2;

  console.log(wrapperShift);

  var currentElement = 0;

  right.addEventListener('click', function(){
    if (index < element.length -1) {
      console.log(element[index]);
      currentElement = element[index].offsetWidth;
      console.log(currentElement);
      var newElement = element[index+1].offsetWidth;
      //wrapperShift = wrapperShift - (currentElement/2 + newElement/2);
      console.log(element[index + 1].offsetWidth);
      console.log(element[index + 2].offsetWidth);
      console.log(wrapper.offsetWidth);
      wrapperShift = wrapperShift - ((element[index + 1].offsetWidth + element[index + 2].offsetWidth)/2);
      console.log(wrapperShift);
      wrapper.style.transform = `translateX(${wrapperShift}px)`;
        if(index < 6) {
          element[index].style.visibility = 'hidden';
          element[index + 1].style.visibility = 'visible';
          element[index + 2].style.visibility = 'visible';
          if (index === 6) {
            element[index].style.visibility = 'visible';
            element[index + 1].style.visibility = 'visible';
          }
        }
      index++;
    } else {
      index == element.length;
    }
  });

  var indexBack = element.length -1;
  console.log(indexBack);
  left.addEventListener('click', function() {
    if (indexBack > 1) {
  //wrapperShift = wrapperShift + element[indexBack].offsetWidth/2 + element[indexBack - 1].offsetWidth/2;
    wrapperShift = wrapperShift + ((element[indexBack].offsetWidth + element[indexBack - 1].offsetWidth)/2);
    console.log(wrapperShift);
    wrapper.style.transform = `translateX(${wrapperShift}px)`;
    element[indexBack].style.visibility = 'hidden';
    element[indexBack - 1].style.visibility = 'visible';
    element[indexBack -2].style.visibility = 'visible';
    if (indexBack === 1) {
      element[indexBack].style.visibility = 'visible';
      element[indexBack + 1].style.visibility = 'visible';
    }
    indexBack--;
  } else {
    indexBack == 1;
  }
});

  container.style.transition = `ease ${speedAnimation}ms`;
};

getContainer('.wrapper', '.left', '.right', 800);
