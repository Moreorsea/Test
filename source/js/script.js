'use strict';

var galleryImg = document.querySelectorAll('.gallery__img'); //получила всеэлементы коллекции
var getContainer = document.querySelector('.gallery__container');
var container = document.querySelector('.container');
var popupBg = document.querySelector('.popup_bg');
var popup = document.querySelector('.popup');
var popupOpen = function () {
   container.classList.add('popup_bg');
   console.log(container);
};


galleryImg.forEach((item) => { //перебираю каждый элемент
  item.addEventListener('click', function (e) {
  var img = e.currentTarget;
  var element = img.cloneNode(true);
  console.log(img);
  console.log(element);

  popupOpen();

  popup.appendChild(element);

  element.classList.add('popup_img');

  console.log(element);

  var popupClose = function () {
    popup.addEventListener('click', function (){
      container.classList.remove('popup_bg');
      element.classList.remove('popup_img');
      popup.removeChild(element);
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
