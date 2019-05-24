'use strict';
var wrapper = document.querySelector('.wrapper');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var index = 0;

class Slide {
  constructor(buttonLeft, buttonRight, container) {
    this.left = buttonLeft;
    this.right = buttonRight;
    this.container = wrapper;
  }
  slide() {
    var elements = this.container.children;
    console.log(elements.length);

    //расчет половины ширины видимой части браузера
    var wrapperWidth = this.container.offsetWidth/2;
    console.log(wrapperWidth);

    for(var i = 0; i < elements.length; i++) {
      elements[i].style.transform = `translateX(668px)`;
    }

  this.right.addEventListener('click', function() {
    if(index < 6) {

      console.log(elements[index]);
      var secondSum = (elements[index+1].offsetWidth + elements[index+2].offsetWidth)/2;
      console.log(secondSum);
      wrapperWidth = wrapperWidth - secondSum;
      for(var i = 0; i < elements.length; i++) {
        elements[i].style.transform = `translateX(${wrapperWidth}px)`;
      }
      elements[index].style.visibility = 'hidden';
      elements[index+2].style.visibility = 'visible';
    } else {
      index === 6;
      elements[index].style.visibility = 'visible';
      elements[index+1].style.visibility = 'visible';
    }
    index++;
  });

  this.left.addEventListener('click', function() {
    if(index > 0) {

    console.log(elements[index]);
    var secondSum = (elements[index].offsetWidth + elements[index-1].offsetWidth)/2;
    console.log(secondSum);
    wrapperWidth = wrapperWidth + secondSum;
    for(var i = elements.length - 1; i >= 0; i--) {
      elements[i].style.transform = `translateX(${wrapperWidth}px)`;
    }
    elements[index+1].style.visibility = 'hidden';
    elements[index-1].style.visibility = 'visible';
  } else {
    index === 0;
  }
  index--;
  });

  }
}

var slider = new Slide(left, right, wrapper);
