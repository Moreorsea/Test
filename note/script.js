'use strict';

let noteList = document.querySelector('.note-list'); //обложка


class Note {
    //создаю заметку
    //меняю состояние заметки
    constructor (info) {
        this.elementInfo = info;
        this.checked = info.checked;

    }
    createNote(){
    //создать HTML-разметку
    var listItem = document.createElement('li');
    listItem.classList.add('note-list__item');
    listItem.innerHTML = '<label class="note-list__item-wrapper"><div class="note-list__item-wrapper-text"><p class="note-list__item-name"></p><p class="note-list__item-work"></p><p class="note-list__item-done"></p></div><input type="checkbox" class="note-list__item-input"><span class="note-list__item-text"></span></label>';
    
    //скопировать шаблон, чтобы получить пустую разметку заметки
    var elementItem = listItem.cloneNode(true);
    noteList.appendChild(elementItem);
    

    elementItem.querySelector('.note-list__item-input').addEventListener('click', () => {
      this.checked = !this.checked;
      if(this.checked === true) {
        elementItem.querySelector('.note-list__item-work').innerHTML = 'Сделано';
        elementItem.classList.add('note-list__item--checked');
        var currentElement = elementItem;
        noteList.removeChild(elementItem);
        noteList.appendChild(currentElement);
      } else {
        elementItem.querySelector('.note-list__item-work').innerHTML = 'В работе';
        elementItem.classList.remove('note-list__item--checked');
        var currentElement = elementItem;
        noteList.removeChild(elementItem);
        noteList.insertBefore(currentElement, noteList.firstChild);
      }
    });
    return elementItem;
      }
}

class List {
    //сформировать список
    constructor(container){
     this.noteList = container;
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

        this.noteElements.forEach((noteElement, index) => {
          var newElement = new Note(noteElement).createNote(index);
          newElement.querySelector('.note-list__item-name').innerHTML = this.noteElements[index].noteName;
          newElement.querySelector('.note-list__item-text').innerHTML = this.noteElements[index].text;
          newElement.querySelector('.note-list__item-work').innerHTML = 'В работе';
          console.log(newElement);
          this.arrNote[index] = newElement; 
        })       
        console.log(this.arrNote);
    }
    renderList (){
      this.noteList.innerHTML = '';

      this.arrNote.forEach((note) => {
        this.noteList.appendChild(note);
      });
    }
}

var newList = new List(noteList);
