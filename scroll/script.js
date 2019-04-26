'use strict';
 
  var docEl = document.documentElement;
  var submit = document.querySelector(".submit");
  var inputText = document.querySelector("#text");

//при клике на "скроллить" получаю номер блока, до которого нужно скроллить
 submit.onclick = function () {
   //получила номер блока, который ввел пользователь
   var text = inputText.value;
   console.log(text);

   //нахожу элемент по введенному пользователем числу
   var index = document.querySelector('#a1[dataset="'+text+'"]');
   console.log(index);
  
   //получить координату, до которой нужно скроллить
   var getCoords = function (element) {
    //получаю координату контейнера
    var box = element.getBoundingClientRect();
    var documentCoords = document.documentElement.getBoundingClientRect();
    console.log(documentCoords.height);
    console.log(box);
    var body = document.body;
    
    //считаем прокрутку страницы
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    console.log(scrollTop); 

    //координаты нужного элемента = координаты элемента относительно окна + прокрутка
    var top = Math.round(box.top + scrollTop);
    console.log(top);
    

    //в цикле по шагам приближаюсь до точки, возле которой останавливается скроллинг
   var currentCoord = window.pageYOffset; //текущая координата, с которой начинается прокрутка до следующего элемента  
   console.log(currentCoord); //координата элемента, до которого нужно скроллить
   var result = currentCoord + box.top;
    console.log(result);
    var step = result/300;
    console.log(step);
   
    var timer = function () {
     var timerId = setInterval(function(){     
       var move = top + step;
       console.log(move);
   
        if(documentCoords.height > top) {clearInterval(timerId);
        window.scroll(0, move);
      }
     },3000);
   };

   timer ();
   return top;
   };

   getCoords(index); 
 };

