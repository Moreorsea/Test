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
          this.checked = this.noteElements[this.number].checked;
          console.log(this.checked);
          this.createNote(number);
    }
    createNote(){
       //шаблон заметки
       var listItem = document.createElement('li');
       listItem.classList.add('note-list__item');
       listItem.innerHTML = '<label class="note-list__item-wrapper"><div class="note-list__item-wrapper-text"><p class="note-list__item-name"></p><p class="note-list__item-work"></p><p class="note-list__item-done"></p></div><input type="checkbox" class="note-list__item-input"><span class="note-list__item-text"></span></label>';
 
       //скопировать шаблон, чтобы получить пустую разметку заметки
       var element = listItem.cloneNode(true);

       //заполнить заметку
       element.querySelector('.note-list__item-name').innerHTML = this.noteElements[this.number].noteName;
       element.querySelector('.note-list__item-text').innerHTML = this.noteElements[this.number].text;
       element.querySelector('.note-list__item-work').innerHTML = this.noteElements[this.number].checked;
       //this.noteElements[this.number].checked = 'В работе';
       var checkbox = element.querySelector('.note-list__item-input');
       console.log(this.checked);


       //реакция на выбор заметки
       checkbox.addEventListener('change', () => {
        element.classList.toggle('note-list__item--checked');
        if(element.classList.toggle('note-list_item--checked') === true) {
            element.querySelector('.note-list__item-work').innerHTML = 'Сделано';
            this.noteElements[this.number].checked = 'Сделано';
            console.log(this.noteElements[this.number].checked);
        } else {
            element.querySelector('.note-list__item-work').innerHTML = 'В работе';
            this.noteElements[this.number].checked = 'В работе';
            console.log(this.noteElements[this.number].checked);
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
     console.log(this.arrNote);
     this.createList();
    }
    createList (){
      var elements = document.querySelectorAll('.note-list__item');
      console.log(this.arrNote[2].checked);

      noteList.addEventListener('click', (evt) => {  
        var target = evt.target;
        var currentElement = target.offsetParent;
        console.log(currentElement);
           console.log(this.arrNote[0].checked);
           console.log(this.arrNote[1].checked);
           console.log(this.arrNote[2].checked);
           console.log(this.arrNote[3].checked);
      });
    }
}

var newList = new List(noteList);
