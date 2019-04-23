'use strict';
 
  var firstElem = document.querySelector('.one-container');
  var twoElem = document.querySelector('.two-container');
  var threeElem = document.querySelector('.three-container');
  var fourElem = document.querySelector('.four-container');
  var docEl = document.documentElement;

  var getCoords = function (elem) {
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
  
  getCoords(firstElem);
