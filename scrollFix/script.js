'use strict';

var element = document.querySelectorAll('.container');
var wrapper = document.querySelector('.wrapper');
var circle = document.querySelectorAll('.circle');
console.log(element.length);
//var currentSection = 0;
//определить на какой секции произошел скролл
//выполнить условие
//прогнать секцию через цикл

wrapper.addEventListener('wheel', function(e) {
  var currentElementIndex = e.target.id; //на каком элементе произошел скролл
  console.log(e.deltaY); //определяет направления скролла. + - вниз, - -обратно (вверх)
  if (e.deltaY > 0) {
    if(currentElementIndex < element.length) {
      for (var i = 0; i < element.length; i++) {
        var sum = -100 * currentElementIndex;
        element[i].style.transform = `translateY(${sum}vh)`;
      }
      circle[currentElementIndex].classList.add('circle--checked');
      circle[currentElementIndex -1].classList.remove('circle--checked');
    } else {
      currentElementIndex === element.length - 1;
    }
  } else {
    if(currentElementIndex > 0) {
      currentElementIndex--;
      circle[currentElementIndex -1].classList.add('circle--checked');
      circle[currentElementIndex].classList.remove('circle--checked');
      for (var i = 3; i < element.length; i--) {
        var sum = -100 * (currentElementIndex - 1);
        element[i].style.transform = `translateY(${sum}vh)`;
      }
    } else {
      currentElementIndex === 0;
    }
  }
});

var wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('touchstart', function (evt){
  var startY = parseInt(evt.changedTouches[0].pageY);

  wrapper.addEventListener('touchmove', function (evt) {
    var moveY = parseInt(evt.changedTouches[0].pageY);

    var delta = moveY - startY;
    var currentElementIndex = evt.target.id;
    if (delta > 0) {
      //то листание сверху вниз
      if(currentElementIndex < element.length) {
        for (var i = 0; i < element.length; i++) {
          var sum = -100 * currentElementIndex;
          element[i].style.transform = `translateY(${sum}vh)`;
        }
        circle[currentElementIndex].classList.add('circle--checked');
        circle[currentElementIndex -1].classList.remove('circle--checked');
      } else {
        currentElementIndex === element.length - 1;
      }
      
    } else {
      //снизу вверх
      if(currentElementIndex > 0) {
        currentElementIndex--;
        circle[currentElementIndex -1].classList.add('circle--checked');
        circle[currentElementIndex].classList.remove('circle--checked');
        for (var i = 3; i < element.length; i--) {
          var sum = -100 * (currentElementIndex - 1);
          element[i].style.transform = `translateY(${sum}vh)`;
        }
      } else {
        currentElementIndex === 0;
      }
    }
  });
});

wrapper.addEventListener('touchend', function (evt){
  wrapper.style.background = 'lightblue';
});
