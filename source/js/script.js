'use strict';

var galleryImg = document.querySelectorAll('.gallery__img'); //получила всеэлементы коллекции
var getContainer = document.querySelector('.gallery__container');
var container = document.querySelector('.container');
var popupBg = document.querySelector('.popup_bg');
var popupOpen = function (atr) {
   container.classList.add('popup_bg');
   };


galleryImg.forEach((item) => { //перебираю каждый элемент
  item.addEventListener('click', function (e) {
  var img = e.currentTarget;
  console.log(img);

  popupOpen(img);

  img.classList.add('popup_img');
  var popupClose = function () {
    container.addEventListener('click', function (){
      container.classList.remove('popup_bg');
      img.classList.remove('popup_img');
    });
  };
  popupClose();
  });
});
