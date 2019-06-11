'use strict';

var noteList = document.querySelector('.note-list'); //обложка


class Note {
    //создаю заметку
    //меняю состояние заметки
    constructor (container, number) {
        this.noteList = container;
        this.noteElements = [
            {
                noteName: 'Заметка 1',
                text: 'Ели мясо мужики',
                checked: 'В работе'
              },
              {
                noteName: 'Заметка 2',
                text: 'Пивом запивали',
                checked: 'В работе'
              },
              {
                noteName: 'Заметка 3',
                text: 'О чем конюх говорил',
                checked: 'В работе'
              },
              {
                noteName: 'Заметка 4',
                text: 'Они не понимали',
                checked: 'В работе'
              }
          ];
          //console.log(this.noteElements[1]);
          this.number = number;
          this.createNote(number);
    }
    createNote(){
       //шаблон заметки
       var listItem = document.createElement('li');
       listItem.classList.add('note-list__item');
       listItem.innerHTML = '<label class="note-list__item-wrapper"><div class="note-list__item-wrapper-text"><p class="note-list__item-name"></p><p class="note-list__item-work"></p><p class="note-list__item-done"></p></div><input type="checkbox" class="note-list__item-input"><span class="note-list__item-text"></span></label>';
 
       //скопировать шаблон, чтобы получить пустую разметку заметки
       var element = listItem.cloneNode(true);
       console.log(element);

       //заполнить заметку
       element.querySelector('.note-list__item-name').innerHTML = this.noteElements[this.number].noteName;
       element.querySelector('.note-list__item-text').innerHTML = this.noteElements[this.number].text;
       var itemWork =  element.querySelector('.note-list__item-work');
       itemWork.innerHTML = this.noteElements[this.number].checked;
       var checkbox = element.querySelector('.note-list__item-input');

       //реакция на выбор заметки
       checkbox.addEventListener('change', function () {
        element.classList.toggle('note-list__item--checked');
        if(element.classList.toggle('note-list_item--checked') === true) {
            itemWork.innerHTML = 'Сделано';
        } else {
            itemWork.innerHTML = 'В работе';
        }
    });
    this.noteList.appendChild(element);
    }
}

class List {
    //сформировать список
    //отсортировать список
    constructor(container){
     this.noteList = container;
     this.arrNote = [new Note(noteList, 0), new Note(noteList, 1), new Note(noteList, 2), new Note(noteList, 3)];
     this.createList();
    }
    createList (){
      var elements = document.querySelectorAll('.note-list__item');

      noteList.addEventListener('click', function(evt){  
         var currentElement = evt.target;
         console.log(currentElement);
          if(currentElement.checked === true) {
            console.log('Выводится');
         } else {
           console.log('Очень жаль');
         }    
      });
    }
}

var newList = new List(noteList);
