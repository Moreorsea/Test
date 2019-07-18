'use strict';

var galleryImg = document.querySelectorAll('.gallery__img');
var getContainer = document.querySelector('.gallery__container');
var container = document.querySelector('.container');
var popupBg = document.querySelector('.popup_bg');
var popup = document.querySelector('.popup');
var buttonPrev = document.querySelector('.container-button--prev');
var buttonNext = document.querySelector('.container-button--next');
var buttonClose = document.querySelector('.container-close--button');
var arrayImg = ['img/IMG_1022.png', 'img/5.png', 'img/DSC08143.png', 'img/IMG_6924.png', 'img/8hVMhD8eWDs.png',
'img/8.png', 'img/-6WvLcbWdl0.png', 'img/g__IwWjuKBw.png', 'img/IMG_1040.png', 'img/4.png', 'img/DSC00524.png',
'img/IMG_1039.png', 'img/3.png'];
var popupOpen = function () {
   container.classList.add('popup_bg');
  buttonPrev.style.display = 'block';
  buttonNext.style.display = 'block';
  buttonClose.style.display = 'block';
  for(var i = 0; i < 13; i++) {
    array[i] = imgContainer[i];
  }
  galleryList.addEventListener(('click'), (evt) => { //повесила событие на галерею
    var currentTarget = evt.target;
    var currentElement = currentTarget.parentNode; //смотрю на каком элемент был клик
    var currentId = currentElement.getAttribute('id'); //получаю его id
    var img = popup.querySelector('img'); // получаю блок, куда отрисовывается картинка при клике

    img.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      var startCoords = { //координаты точки, с которой стала перемещать фото
        x: evt.clientX,
        y: evt.slientY
      }
      console.log(startCoords.x);

      //при движении мыши обновляем смещение относительно первоначальной точки
       function onMouseMove (moveEvt) {
         moveEvt.preventDefault();

        // shift - смещение. Вычитаю из начальной координаты координату, где оказалась мышка
         var shift = {
           x: startCoords.x - moveEvt.clientX, 
           y: startCoords.y - moveEvt.clientY
         }

         //нужно обновить стартовые координаты после перетаскивания картинки
         startCoords = {
           x: moveEvt.clientX,
           y: moveEvt.clientY
         }

         img.style.top = (img.offsetTop - shift.y) + 'px';
         img.style.left = (img.offsetLeft - shift.x) + 'px';
       };

       //при отпускании кнопки мыши перестаю слушать события
       function onMouseUp (upEvt) {
         upEvt.preventDefault();

         document.removeEventListener('mousemove', onMouseMove);
         document.removeEventListener('mouseup', onMouseUp);
       };

      document.addEventListener('mousemove', onMouseMove); //обработчик события передвижения мыши
      document.addEventListener('mouseup', onMouseUp); // обработчик события отпускания мыши
    });

    buttonPrev.addEventListener(('click'), () => { //обработка клика по левой стрелочке
      console.log('Нажата кнопка назад');
      currentId--;
      if(currentId >= 0) {
        img.setAttribute('src', arrayImg[currentId]);
      } else {
        currentId = 0;
      }
    });
  
    buttonNext.addEventListener(('click'), () => { //обработка клика по правой стрелочке
      currentId++;
      console.log(currentId);
     if(currentId < arrayImg.length) {
        img.setAttribute('src', arrayImg[currentId]);
      } else {
        currentId = (arrayImg.length - 1);
      }
    });
  });
};

var opacityMin = 0;
var opacityMax = 0.7;

var fadeIn = function (time, element, opacityMax) {
  var element = document.querySelector('.popup');
  var elementPopup = document.querySelector('.popup_bg');
  var step = opacityMax/time;

  for (var i = 0; i <= opacityMax;) {
    var opacity = opacityMin + (i + step);
   i = i + step;
   elementPopup.style.opacity = opacity;
  }
};

var fadeOut = function (time, element, opacityMax) {
  var element = document.querySelector('.popup_bg');
  var step = opacityMax/time;

  for (var i = 0; i < opacityMax; i = i + step) {
    var opacity = opacityMax - (i + step);
    element.style.opacity = opacity;
  }
}

var array = [];
var galleryList = document.querySelector('.gallery__list');
var imgContainer = document.querySelectorAll('.gallery__container');
var buttonPrev = document.querySelector('.container-button--prev');
var buttonNext = document.querySelector('.container-button--next');
var buttonClose = document.querySelector('.container-close--button');




galleryImg.forEach((item) => { //перебираю каждый элемент
  item.addEventListener('click', function (e) { //gallery__container
  var img = e.currentTarget; //получение элемента
  var element = img.cloneNode(true); //копирование элемента
  popupOpen();

  popup.appendChild(element); //добавление элемента в блок popup

  element.classList.add('popup_img'); //добавление элементу класса
  element.classList.add('gallery__img--animation-visible');

  fadeIn(1000, document.querySelector('.popup_bg'), 0.7);

  var popupClose = function () {
    /*container.addEventListener('click', function (){*/
      /*element.classList.remove('gallery__img--animation-visible');
      element.classList.add('gallery__img--animation-hidden');*/
  
      /*var removeChild = function () {*/
       /* popup.removeChild(element);
        element.classList.remove('popup_img');
      };
      setTimeout(removeChild, 600);*/

      /*var hiddenPopup = function () {
        container.classList.remove('popup_bg');
        fadeOut(1000, document.querySelector('.popup_bg'), 0);
        console.log('Кликнули по темному фону');
      };
      setTimeout(hiddenPopup, 700);*/

    /*});*/
    buttonClose.addEventListener('click', function() {
      element.classList.remove('gallery__img--animation-visible');
       element.classList.add('gallery__img--animation-hidden');
   
       var removeChild = function () {
        popup.removeChild(element);
         element.classList.remove('popup_img');
       };
       setTimeout(removeChild, 600);
 
       var hiddenPopup = function () {
         container.classList.remove('popup_bg');
         fadeOut(1000, document.querySelector('.popup_bg'), 0);
         console.log('Кликнули по темному фону');
       };
       setTimeout(hiddenPopup, 600);
      buttonPrev.style.display = 'none';
      buttonNext.style.display = 'none';
 });

    document.addEventListener('keydown', function (evt) {
      if(evt.keyCode === 27) {
        element.classList.remove('gallery__img--animation-visible');
       element.classList.add('gallery__img--animation-hidden');
   
       var removeChild = function () {
        popup.removeChild(element);
         element.classList.remove('popup_img');
       };
       setTimeout(removeChild, 600);
 
       var hiddenPopup = function () {
         container.classList.remove('popup_bg');
         fadeOut(1000, document.querySelector('.popup_bg'), 0);
         console.log('Кликнули по темному фону');
       };
       setTimeout(hiddenPopup, 600);
      buttonPrev.style.display = 'none';
      buttonNext.style.display = 'none';
      }
    });

  };
  popupClose();
  });
});


//событие перемещения к галерее
var button = document.querySelector('.promo__button');
var gallery = document.querySelector('.gallery');

button.addEventListener('click', function(evt) {
  window.scrollTo({
    top: 10000,
    behavior: 'smooth'
  })
});

//событие перемещения от галереи обратно вверх страницы
var buttonBottom = document.querySelector('.button-bottom__img');
//console.log(buttonBottom);

buttonBottom.addEventListener('click', function(e) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
