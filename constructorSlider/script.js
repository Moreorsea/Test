'use strict';
var wrapper = document.querySelector('.wrapper');
var left = document.querySelector('.left');
var right = document.querySelector('.right');


class Slide {
  constructor(buttonLeft, buttonRight, container) {
    this.left = buttonLeft;
    this.right = buttonRight;
    this.container = wrapper;
    this.elements = this.container.children;
    //расчет половины ширины видимой части браузера
    var wrapperWidth = this.container.offsetWidth/2;
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].style.transform = `translateX(668px)`;
    }
    var index = 0;
  }
  slide(side) {
    switch(side) {
      case 'left': {
        if(index > 0) {
          element[index +1].style.visible = 'hidden';
          var secondSum = (elements[index].offsetWidth + elements[index-1].offsetWidth)/2;
          var wrapperWidth = this.container.offsetWidth/2;
          wrapperWidth = wrapperWidth - secondSum;
          for(var i = elements.length - 1; i >= 0; i--) {
            this.elements[i].style.transform = `translateX(${wrapperWidth}px)`;
          }
          elements[index+1].style.visibility = 'hidden';
          elements[index-1].style.visibility = 'visible';
        } else {
            index === 0;
          }
        index--;
      };
      break;
      case 'right': {
        if(index < 6) {
          var secondSum = (elements[index+1].offsetWidth + elements[index+2].offsetWidth)/2;
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
      };
      break;
      default: return;
    }
    this.right.addEventListener('click', () => {this.slide(right);});

    this.left.addEventListener('click', () => {this.slide(left);});
}
