'use strict';

var element = document.querySelectorAll('.container');
var wrapper = document.querySelector('.wrapper');
var circle = document.querySelectorAll('.circle');
console.log(element.length);
//если показываю 1 див по умолчанию
//нажатие на правую кнопку будет увеличивать id элемента
//нажатие на левую кнопку будет уменьшать id
var buttonNext = document.querySelector('.next');
var buttonBack = document.querySelector('.back');

buttonNext.addEventListener('click', function (event){
  buttonBack.style.display = 'block';
    wrapper.style.transform = `translateX(-100vw)`;
});

buttonBack.addEventListener('click', function(event) {
  wrapper.style.transform = `translateX(0vw)`;
  buttonBack.style.display = 'none';
});