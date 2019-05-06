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

var wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('touchstart', function (evt){
  wrapper.style.background = '#f00';
  console.log(wrapper.style.background = '#f00');
  var startY = parseInt(evt.changedTouches[0].pageY);
  console.log(startY); //отработало

  wrapper.addEventListener('touchmove', function (evt) {
    var moveX = parseInt(evt.changedTouches[0].pageX);
    console.log(moveX); //получить координату пальца х
    var moveY = parseInt(evt.changedTouches[0].pageY);
    console.log(moveY); //получить координату пальца у

    var delta = moveY - startY;
    console.log(delta);
    var currentElementIndex = evt.target.id;
    console.log(currentElementIndex);
    if (delta > 0) {
      //то листание сверху вниз
      wrapper.style.background = 'green';
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
      //снизу вверх
      wrapper.style.background = 'yellow';
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
  });
});

wrapper.addEventListener('touchend', function (evt){
  wrapper.style.background = 'lightblue';
});
