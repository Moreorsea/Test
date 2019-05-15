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
  // ширина - 771px


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
      element[index].style.transform = `translateX(${delta}px)`;
      element[index + 1].style.transform = `translateX(${delta}px)`;

      wrapperWidth = wrapperWidth - element[index].offsetWidth;
      console.log(wrapperWidth);

        if(index < 6) {
          element[index].style.visibility = 'visible';
          element[index + 1].style.visibility = 'visible';

          if (index === 6) {
            element[index].style.visibility = 'visible';
            element[index + 1].style.visibility = 'visible';
          }
        }
      index++;
    }
  });


  left.addEventListener('click', function() {
    if (index > 1) {
      console.log(element[index]);
      var sumBlocks = Math.round((element[index].offsetWidth + element[index - 1].offsetWidth)/2);
      console.log(sumBlocks);
      console.log(wrapperWidth);
      var delta = wrapperWidth + sumBlocks;
      console.log(delta);
      element[index].style.visibility = 'hidden';
      element[index - 2].style.transform = `translateX(${delta}px)`;
      console.log(element[index-2]);
      element[index -1].style.transform = `translateX(${delta}px)`;
      console.log(element[index -1]);

    index--;

  }
});

  container.style.transition = `ease ${speedAnimation}ms`;
};

getContainer('.wrapper', '.left', '.right', 800);
