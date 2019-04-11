'use strict';

var galleryImg = document.querySelectorAll('.gallery__img'); //получила всеэлементы коллекции
var getContainer = document.querySelector('.gallery__container');
var container = document.querySelector('.container');
var popupBg = document.querySelector('.popup_bg');
var popupOpen = function () {
   container.classList.add('popup_bg');
    //var fadeIn = function(time, element) {
      //popupBg.classList.add('popup__bg');
    //};

    //fadeIn(400, document.querySelector('.popup_bg'));
};

var fadeIn = function (time, element) {
  var opacityMin = 0;
  var opacityMax = 0.7;
  var step = opacityMax/time;
  console.log(step);
  var element = document.querySelector('.container');
  console.log(element);
  var elementPopup = document.querySelector('.popup_bg');
  console.log(elementPopup);

  for (var i = 0; i <=opacityMax;) {
   var opacity = opacityMin + (i + step);
   i = i + step;
   element.style.opacity = opacity;
   elementPopup.style.opacity = opacity;
   console.log(element);
   console.log(elementPopup);
  }
};

galleryImg.forEach((item) => { //перебираю каждый элемент
  item.addEventListener('click', function (e) {
  var img = e.currentTarget;
  var element = img.cloneNode(true);
  console.log(img);
  console.log(element);

  popupOpen();

  container.appendChild(element);

  element.classList.add('popup_img');
  fadeIn(700, document.querySelector('.container'));
  fadeIn(700, document.querySelector('.popup_bg'));
  var popupClose = function () {
    container.addEventListener('click', function (){
      container.classList.remove('popup_bg');
      element.classList.remove('popup_img');
      container.removeChild(element);
    });
  };
  popupClose();
  });
});







//событие перемещения к галерее
var button = document.querySelector('.promo__button');
var gallery = document.querySelector('.gallery');

button.addEventListener('click', function(evt) {
  window.scrollTo(0, 1400);
});



//событие перемещения от галереи обратно вверх страницы
var buttonBottom = document.querySelector('.button-bottom');

buttonBottom.addEventListener('click', function(evt) {
  window.scrollTo(1500, 0);
});
