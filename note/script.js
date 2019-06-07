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
                work: 'В работе',
                done: 'Сделано'
              },
              {
                noteName: 'Заметка 2',
                text: 'Пивом запивали',
                work: 'В работе',
                done: 'Сделано'
              },
              {
                noteName: 'Заметка 3',
                text: 'О чем конюх говорил',
                work: 'В работе',
                done: 'Сделано'
              },
              {
                noteName: 'Заметка 4',
                text: 'Они не понимали',
                work: 'В работе',
                done: 'Сделано'
              }
          ];
          this.number = number;
          this.createNote(number);
    }
    createNote(){
       //шаблон заметки
       var listItem = document.createElement('li');
       listItem.classList.add('note-list__item');
       listItem.innerHTML = '<label class="note-list__item-wrapper"><div class="note-list__item-wrapper-text"><p class="note-list__item-name"></p><p class="note-list__item-work"></p><p class="note-list__item-done"></p></div><input type="checkbox" class="note-list__item-input"><span class="note-list__item-text"></span></label>';
       //var div = listItem.firstChild;
 
       //скопировать шаблон, чтобы получить пустую разметку заметки
       var element = listItem.cloneNode(true);
       console.log(element);
       //this.noteList.appendChild(element);

       //заполнить заметку
       element.querySelector('.note-list__item-name').innerHTML = this.noteElements[this.number].noteName;
       element.querySelector('.note-list__item-text').innerHTML = this.noteElements[this.number].text;
       var itemWork =  element.querySelector('.note-list__item-work');
       itemWork.innerHTML = this.noteElements[this.number].work;
       var itemDone = element.querySelector('.note-list__item-done');
       itemDone.innerHTML = this.noteElements[this.number].done;
       var checkbox = element.querySelector('.note-list__item-input');

       //реакция на выбор заметки
       checkbox.addEventListener('change', function () {
        element.classList.toggle('note-list__item--checked');
        if(element.classList.toggle('note-list_item--checked') === true) {
            itemWork.style.display = 'none';
            itemDone.style.display = 'block';
        } else {
            itemWork.style.display = 'block';
            itemDone.style.display = 'none';
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
     this.newNote0 = new Note(noteList, 0);
     this.newNote1 = new Note(noteList, 1);
     this.newNote2 = new Note(noteList, 2);
     this.newNote3 = new Note(noteList, 3);
     this.createList();
    }
    createList (){
      console.log(this.noteList.children);


    }
}

var newList = new List(noteList);
