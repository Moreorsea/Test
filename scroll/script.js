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
    console.log(box);
    var body = document.body;
    
    //считаем прокрутку страницы
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    console.log(scrollTop); 

    //координаты нужного элемента = координаты элемента относительно окна + прокрутка
    var top = Math.round(box.top + scrollTop);
    console.log(top);
    

    //в цикле по шагам приближаюсь до точки, возле которой останавливается скроллинг
   var sum = 50;

   var timer = function () {
     var timerId = setInterval(function(){
       sum = sum + 10;
       console.log(top);
     
     if(sum > top) clearInterval(timerId);
     console.log(sum);
     window.scroll(0, sum);
     },10);
   };

   timer ();
   return top;
   };

   

   getCoords(index);

   
   
 };

