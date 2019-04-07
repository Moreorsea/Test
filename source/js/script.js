'use strict';

var galleryImg = document.querySelectorAll('.gallery__img'); //получила всеэлементы коллекции
console.log(galleryImg);
var getContainer = document.querySelector('.gallery__container');
var container = document.querySelector('.container');
var imgSrc = ['img/IMG_1022.png', 'img/5.png', 'img/DSC08143.png', 'img/IMG_6924.png', 'img/8hVMhD8eWDs.png', 'img/8.png',
 'img/-6WvLcbWdl0.png', 'img/g__IwWjuKBw.png', 'img/IMG_1040.png', 'img/4.png', 'img/DSC00524.png', 'img/IMG_1039.png', 'img/3.png'];
var popupOpen = function (atr) {
   container.classList.add('popup_bg');
   galleryImg.classList.add('popup_img');
   };


galleryImg.forEach((item) => { //перебираю каждый элемент
  item.addEventListener('click', function (e) {
  var img = e.currentTarget;
  console.log(img);
  img.getAttribute('src');
  var newSrc = img.getAttribute('src');
  console.log(newSrc);

  popupOpen(img);
  imgBig(img);
  });
});
