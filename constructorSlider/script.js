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
    this.wrapperWidth = this.container.offsetWidth/2;
    console.log(this.wrapperWidth);
    for(var i = 0; i < this.elements.length; i++) {
      this.elements[i].style.transform = `translateX(668px)`;
    }
    this.index = 0;
    this.right.addEventListener('click', () => {this.slide('right');});

    this.left.addEventListener('click', () => {this.slide('left');});
    console.log(this.index);
  }
  slide(side) {
    switch(side) {
      case 'left': {
        console.log(this.index);
        if(this.index > 0) {
          this.elements[this.index +1].style.visible = 'hidden';
          var secondSum = (this.elements[this.index].offsetWidth + this.elements[this.index-1].offsetWidth)/2;
          this.wrapperWidth = this.wrapperWidth + secondSum;
          for(var i = this.elements.length - 1; i >= 0; i--) {
            this.elements[i].style.transform = `translateX(${this.wrapperWidth}px)`;
          }
          this.elements[this.index+1].style.visibility = 'hidden';
          this.elements[this.index-1].style.visibility = 'visible';
          this.index--;
        } else {
            this.index === 0;
          }      
        break;
      };
      case 'right': {
        if(this.index < 6 || this.index >= 0) {
          console.log(this.index); 
          console.log(this.elements[this.index]);
          var secondSum = (this.elements[this.index+1].offsetWidth + this.elements[this.index+2].offsetWidth)/2;
          console.log(secondSum);
          this.wrapperWidth = this.wrapperWidth - secondSum;
          console.log(this.wrapperWidth);
          for(var i = 0; i < this.elements.length; i++) {
            this.elements[i].style.transform = `translateX(${this.wrapperWidth}px)`;
          }
          this.elements[this.index].style.visibility = 'hidden';
          this.elements[this.index+2].style.visibility = 'visible';
          this.index++;
        } 
        else {
          this.index === 6;
          this.elements[this.index].style.visibility = 'visible';
          this.elements[this.index+1].style.visibility = 'visible';
        }
        //this.index++;
        break;
      };
      default: return;
    }
  }
}

var newSlide = new Slide(left, right, wrapper);
