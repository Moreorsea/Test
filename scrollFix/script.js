'use strict';

var element = document.querySelectorAll('.container');
var one = document.querySelector('.one');
var wrapper = document.querySelector('.wrapper');
console.log(element);

element.forEach((item) => {
  document.onwheel = function (e) {
    wrapper.style.transform = 'translateY(100vh)';
  };
});

//есть 4 элемента section, ищу все через querySelectorAll, перебираю в forEach
//вешаю обработчик onwheel на документ
//при срабатывании события, у wrapper увеличить transform на высоту экрана
