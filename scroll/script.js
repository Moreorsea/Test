'use strict';
 
  var one = document.querySelector('#one');
  var two = document.querySelector('#two');
  var three = document.querySelector('#three');
  var four = document.querySelector('#four');
  var elem = document.querySelector('#four');
  var docEl = document.documentElement;
  var submit = document.querySelector(".submit");
  var inputText = document.querySelector("#text");



  var getCoords = function (elem) {
    //получаем координаты контейнера
    //var box = elem.getBoundingClientRect();
    var box = four.getBoundingClientRect();
    var body = document.body;

    //считаем прокрутку страницы
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    console.log(scrollTop); 

    //координаты нужного элемента = координаты элемента относительно окна + прокрутка
    var top = box.top + scrollTop;
    console.log(top);     
  };

    //при клике на "скроллить" получаю номер блока, до которого нужно скроллить
    submit.onclick = function () {
      
      //получила номер блока
      var text = inputText.value;
      console.log(text);
     

      //сюда подставлять элемент, идентификатор которого я вытащила
      getCoords(four);

      //в цикле по шагам приближаюсь до точки, возле которой останавливается скроллинг
       for (var i = 30; i < top; i = i + 250) {
          var sum = 0;
          sum = sum + i;
          console.log(sum);  
          window.scroll(0, sum);      
        }
  
    };
