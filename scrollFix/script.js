'use strict';

var element = document.querySelectorAll('.container');
var wrapper = document.querySelector('.wrapper');
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
        element[i].style.transform = `translateY(-100vh)`;
        console.log(element[i].style.transform = `translateY(-100vh)`);
      }
      currentElementIndex++;
      console.log(currentElementIndex);
    } else {
      currentElementIndex === element.length;
    }
  } else {
    if(currentElementIndex > 0) {
      for (var i = 0; i < element.length; i++) {
        element[i].style.transform = `translateY(0vh)`;
        console.log(element[i].style.transform = `translateY(0vh)`);
      }
      currentElementIndex--;
    } else {
      currentElementIndex === 0;
    }
  }
  console.log(currentElementIndex);

//  var moveSection = function(index, number) {
//number = -100vh;
    //for (var i = 0; i < element.length; i++) {
      //var sum = -100 * element[i].id;
      //console.log(element[i]);
      //console.log(sum);
      //if(e.deltaY > 0) {
        //setInterval
    //element[i].style.transform = `translateY(number)`;
    //  console.log(element[i].style.transform = `translateY(-100vh)`);
    //} else {
    //  element[i].style.transform = `translateY(0vh)`;
  //  }
    //}

  //  console.log(element[index]);
//  };
  //moveSection(currentElementIndex, '-100vh');
});

//element.forEach(function(item, id) {
  //document.addEventListener('scroll', function (e) {
    //var img = e.currentTarget;

    //for(var i = 0; i < 2; i++) {
      //var sum = -100 * id;
      //console.log(sum);
      //item.style.transform = `translateY(${sum}vh)`;
      //console.log(item.style.transform = `translateY(sumvh)`);
    //}
  //});
//});

var coord = document.documentElement.clientHeight; //(высота секции)
console.log(coord);

//есть 4 элемента section, ищу все через querySelectorAll, перебираю в forEach
//вешаю событие scroll на document
//при срабатывании события, у section увеличить transform на высоту экрана
//нужно зафиксировать в какую сторону была прокрутка, исходя из этого, transform будет + или -
//
