'use strict';

let noteList = document.querySelector('.note-list'); //обложка


class Note {
    //создаю заметку
    //меняю состояние заметки
    constructor (info) {
        this.elementInfo = info;
        this.checked = info.checked;
        //this.createNote(number);
        //this.noteItemInfo = вытащеный элемент из массива this.noteElements[this.number];
    }
    createNote(){
    //создать HTML-разметку
    var listItem = document.createElement('li');
    listItem.classList.add('note-list__item');
    listItem.innerHTML = '<label class="note-list__item-wrapper"><div class="note-list__item-wrapper-text"><p class="note-list__item-name"></p><p class="note-list__item-work"></p><p class="note-list__item-done"></p></div><input type="checkbox" class="note-list__item-input"><span class="note-list__item-text"></span></label>';
    
    //скопировать шаблон, чтобы получить пустую разметку заметки
    var elementItem = listItem.cloneNode(true);
    console.log(elementItem);


    elementItem.querySelector('.note-list__item-input').addEventListener('click', () => {
      console.log('Событие отрабатывает');
      this.checked = !this.checked;

    });
      }
}

class List {
    //сформировать список
    constructor(container){
     this.noteList = container;
     //this.arrNote = [new Note(noteList, 0), new Note(noteList, 1), new Note(noteList, 2), new Note(noteList, 3)];
     this.noteElements = [
      {
          noteName: 'Заметка 1',
          text: 'Ели мясо мужики',
          checked: false
        },
        {
          noteName: 'Заметка 2',
          text: 'Пивом запивали',
          checked: false
        },
        {
          noteName: 'Заметка 3',
          text: 'О чем конюх говорил',
          checked: false
        },
        {
          noteName: 'Заметка 4',
          text: 'Они не понимали',
          checked: false
        }
    ];
     this.createList();
     this.renderList();
    }
    createList (){
      this.arrNote = [];

        //console.log(this.arrNote);
        this.noteElements.forEach((noteElement, index) => {
          //var newElement = new Note(noteList[i], i).createNote(i);
          var newElement = new Note(noteElement).createNote();
          console.log(newElement);
          this.arrNote[index] = newElement; 
        })       
        console.log(this.arrNote);
    }

    renderList (){
      this.container.innerHTML = '';

      this.arrNote.forEach((note) => {
        this.container.appendChild(note);
      });
    }
}

var newList = new List(noteList);
