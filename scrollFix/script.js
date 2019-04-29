'use strict';

var element = document.querySelectorAll('.container');
var one = document.querySelector('.one');
var wrapper = document.querySelector('.wrapper');
console.log(element);
//var index = document.querySelector(`[dataset="${text}"]`);


element.forEach((item) => {
  document.addEventListener('scroll', function (e) {
    var img = e.currentTarget;
    console.log(item);
    for(var i = 0; i <4; ) {
      item.style.transform = 'translateY(-100vh)' * i;
      console.log(i);
      i++;
    }
  });
});

var coord = document.documentElement.clientHeight; //(высота секции)
console.log(coord);

//есть 4 элемента section, ищу все через querySelectorAll, перебираю в forEach
//вешаю событие scroll на document
//при срабатывании события, у section увеличить transform на высоту экрана
//нужно зафиксировать в какую сторону была прокрутка, исходя из этого, transform будет + или -
//
