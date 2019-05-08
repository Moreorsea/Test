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
var index = 0;
buttonNext.addEventListener('click', function (event){
  buttonBack.style.display = 'block';
  if (index < element.length - 1) {
    index++;
    if(index === element.length -1) {
      buttonNext.style.display = 'none';
    }
  }
  var sum = -100 * index;
  console.log(sum);
    wrapper.style.transform = `translateX(${sum}vw)`;

});
var indexBack = element.length -1;
buttonBack.addEventListener('click', function(event) {
  indexBack--;
  buttonNext.style.display = 'block';
  var sumBack = -100 * indexBack;
  wrapper.style.transform = `translateX(${sumBack}vw)`;
  if (indexBack === 0) {
    buttonBack.style.display = 'none';
  }
});
