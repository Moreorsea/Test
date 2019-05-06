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
  console.log(currentElementIndex);
  console.log(e.deltaY); //определяет направления скролла. + - вниз, - -обратно (вверх)
  if (e.deltaY > 0) {
    if(currentElementIndex < element.length) {
      for (var i = 0; i < element.length; i++) {
        var sum = -100 * currentElementIndex;
        console.log(sum);
        element[i].style.transform = `translateY(${sum}vh)`;
        console.log(element[i].style.transform = `translateY(${sum}vh)`);
      }
      circle[currentElementIndex].classList.add('circle--checked');
      circle[currentElementIndex -1].classList.remove('circle--checked');
      console.log(currentElementIndex);
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
        console.log(sum);
        console.log(currentElementIndex -1);
        element[i].style.transform = `translateY(${sum}vh)`;
        console.log(element[i].style.transform = `translateY(${sum}vh)`);
      }

      console.log(circle[currentElementIndex].classList.remove('circle--checked'));
      //circle[currentElementIndex -1].classList.add('circle--checked');
    } else {
      currentElementIndex === 0;
    }
  }
  console.log(currentElementIndex);
});

var wrapper = document.querySelector('.container--lightblue');

wrapper.addEventListener('touchstart', function (){
  wrapper.style.background = '#f00';
  console.log(wrapper.style.background = '#f00');
});

wrapper.addEventListener('touchmove', function (evt) {
  document.querySelector('#x').innerHTML = parseInt(evt.changedTouches[0].pageX);
  console.log(evt.changedTouches[0].pageX); //получить координату пальца х
  document.querySelector('#y').innerHTML = parseInt(evt.changedTouches[0].pageY);
  console.log(evt.changedTouches[0].pageY); //получить координату пальца у
});

wrapper.addEventListener('touchend', function (){
  wrapper.style.background = '#fff';
});
