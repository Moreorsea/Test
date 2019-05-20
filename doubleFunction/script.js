'use strict';

var element = document.querySelectorAll('.container');
var wrapper = document.querySelector('.wrapper');
console.log(element.length);
//функция (контейнер, кнопки, длительность анимации)

var getContainer = function(selectorContainer, buttonLeft, buttonRight, speedAnimation) {
  var container = document.querySelector(selectorContainer);
  console.log(container);

  var index = 0;
  //под индексом 0 - первый элемент

  var wrapperWidth = 771;
  var left = document.querySelector(buttonLeft);
  var right = document.querySelector(buttonRight);

  right.addEventListener('click', function(){


    if (index < element.length -1) {
      //считаю половину суммы ширин двух близлежащих блоков
      console.log(element[index]);
      console.log(element[index + 1]);
      var sumBlocks = Math.round((element[index].offsetWidth + element[index + 1].offsetWidth)/2);
      console.log(sumBlocks);
      console.log(wrapperWidth);

      var delta = wrapperWidth - sumBlocks;
      console.log(delta);
      for (var i = 0; i < element.length; i++) {
        element[i].style.transform = `translateX(${delta}px)`;
      }

    //  element[index + 1].style.transform = `translateX(${delta}px)`;

      wrapperWidth = wrapperWidth - element[index].offsetWidth;
      console.log(wrapperWidth);

      index++;
      if(index >= 2) {
        element[index].style.visibility = 'visible';
        element[index-2].style.visibility = 'hidden';
      }
    }
    return index;
  });

var indexBack = element.length -1;

console.log(element[index]);
  left.addEventListener('click', function(evt) {

    indexBack--;
    console.log(indexBack);
    console.log(element[indexBack]);
    var sumBlocks = Math.round((element[indexBack].offsetWidth + element[indexBack - 1].offsetWidth)/2);
    console.log(sumBlocks);
    console.log(wrapperWidth);
    var delta = wrapperWidth + sumBlocks;
    console.log(delta);
    wrapperWidth = wrapperWidth + element[indexBack].offsetWidth;

    console.log(wrapperWidth);
    console.log(element[indexBack]);
    for(var j = element.length-1; j >= 0; j--) {
      element[j].style.transform = `translateX(${delta}px)`;
    }
    element[indexBack+1].style.visibility = 'hidden';
    element[indexBack-1].style.visibility = 'visible';


});

  container.style.transition = `ease ${speedAnimation}ms`;
};

getContainer('.wrapper', '.left', '.right', 300);
