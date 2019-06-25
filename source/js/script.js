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

var opacityMin = 0;
var opacityMax = 0.7;

var fadeIn = function (time, element, opacityMax) {
  var element = document.querySelector('.popup');
  var elementPopup = document.querySelector('.popup_bg');
  var step = opacityMax/time;
  console.log(step);


  for (var i = 0; i <= opacityMax;) {
    var opacity = opacityMin + (i + step);
   i = i + step;
   //element.style.opacity = opacity;
   elementPopup.style.opacity = opacity;
   console.log(element);
   console.log(elementPopup);
  }
};

var fadeOut = function (time, element, opacityMax) {
  //var element = document.querySelector('.popup');
  var element = document.querySelector('.popup_bg');
  var step = opacityMax/time;
  console.log(step);

  for (var i = 0; i < opacityMax; i = i + step) {
    var opacity = opacityMax - (i + step);
    console.log(opacity);
    element.style.opacity = opacity;
    //elementPopup.style.opacity = opacity;
  }
}


galleryImg.forEach((item) => { //перебираю каждый элемент
  item.addEventListener('click', function (e) { //gallery__container
  var img = e.currentTarget; //получение элемента
  var element = img.cloneNode(true); //копирование элемента
  popupOpen();

  popup.appendChild(element); //добавление элемента в блок popup

  element.classList.add('popup_img'); //добавление элементу класса
  element.classList.add('gallery__img--animation-visible');


  fadeIn(1000, document.querySelector('.popup_bg'), 0.7);  //opacity 0.7
  //fadeIn(1000, document.querySelector('.popup_img'), 1);

  var popupClose = function () {
    container.addEventListener('click', function (){
      element.classList.remove('gallery__img--animation-visible');
      element.classList.add('gallery__img--animation-hidden');
      //container.classList.remove('popup_bg');
      //element.classList.remove('popup_img');

      //popup.removeChild(element);
      var removeChild = function () {
        popup.removeChild(element);

        element.classList.remove('popup_img');
      };
      setTimeout(removeChild, 600);

      var hiddenPopup = function () {
        container.classList.remove('popup_bg');
        fadeOut(1000, document.querySelector('.popup_bg'), 0);
      };
      setTimeout(hiddenPopup, 700);

    });

  };
  popupClose();
  //popup.removeChild(element);
  //fadeOut(2000, document.querySelector('.popup'), 1);

  });
});


//событие перемещения к галерее
var button = document.querySelector('.promo__button');
var gallery = document.querySelector('.gallery');

button.addEventListener('click', function(evt) {
  //window.scrollTo(0, 1400);
  window.scrollTo({
    top: 10000,
    behavior: 'smooth'
  })
});



//событие перемещения от галереи обратно вверх страницы
var buttonBottom = document.querySelector('.button-bottom__img');
console.log(buttonBottom);

buttonBottom.addEventListener('click', function(e) {
  //window.scrollTo(1500, 0);
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
