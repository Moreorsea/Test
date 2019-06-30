'use strict';
 
  var docEl = document.documentElement;
  var submit = document.querySelector(".submit");
  var inputText = document.querySelector("#text");

 submit.onclick = function () {
  //получила номер блока, который ввел пользователь
  var text = inputText.value;
  console.log(text);

  //нахожу элемент по введенному пользователем числу
  var index = document.querySelector(`[dataset="${text}"]`);
  console.log(index);

  //получить координату, до которой нужно скроллить


  getCoords(index);
};

  var getCoords = function (element) {
      // координата элемента от верха страницы
      var coord = element.offsetTop;
      
      var difference = coord - window.scrollY;
      var step = difference / 25;
      
      var interval = setInterval(function() {
          window.scrollTo(0, window.scrollY + step);
          
          if (Math.abs(window.scrollY - coord) < 70 ) {
              window.scrollTo(0, coord);
              clearInterval(interval);
          }
          
      }, 20);
  };