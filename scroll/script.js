'use strict';
 
  var firstElem = document.querySelector('.one-container');
  var twoElem = document.querySelector('.two-container');
  var threeElem = document.querySelector('.three-container');
  var fourElem = document.querySelector('.four-container');
  var docEl = document.documentElement;

  /*var getValue = function () {
    var inputValue = document.querySelector("#text").value;
    console.log(inputValue);
  };
  document.querySelector("#submit").onclick = getValue();*/

  var submit = document.querySelector("#submit");
  var inputText = document.querySelector("#text");
  console.log(submit);
  console.log(inputText);
  submit.onclick = function () {
    
    var inputValue = inputText.getAttribute("value");
    console.log(inputValue);
  };

 /* var getCoords = function (elem) {
    //получаем координаты контейнера
    var box = elem.getBoundingClientRect();
    var body = document.body;

    //считаем прокрутку страницы
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    console.log(scrollTop);

    //координаты нужного элемента = координаты элемента относительно окна + прокрутка
    var scrollTop = box.top + scrollTop;
    console.log(scrollTop);

    window.onscroll =  function () {
      window.scrollTo({
        top: scrollTop,
        left: 0,
        behavior: 'smooth'
      });
    };
  };
  
  getCoords();*/
