'use strict';

var noteList = document.querySelector('.note-list'); //обложка
var noteListItem = document.querySelector('.note-list__item');
console.log(noteListItem);
var noteListName = document.querySelector('.note-list__item-name');

class CreateNote {
    constructor (container, number){
      this.noteList = container;
      //массив объектов
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
    createNote (){
        noteListItem.innerHTML = '<label class="note-list__item-wrapper"><div class="note-list__item-wrapper-text"><p class="note-list__item-name"></p><p class="note-list__item-work"></p><p class="note-list__item-done"></p></div><input type="checkbox" class="note-list__item-input"><span class="note-list__item-text"></span></label>';
        this.noteList.querySelector('.note-list__item-name').innerHTML = this.noteElements[this.number].noteName;
        this.noteList.querySelector('.note-list__item-text').innerHTML = this.noteElements[this.number].text;
        console.log(this.number);

        var checkbox = this.noteList.querySelector('.note-list__item-input');
        var itemWork =  this.noteList.querySelector('.note-list__item-work');
        itemWork.innerHTML = this.noteElements[this.number].work;
        var itemDone = this.noteList.querySelector('.note-list__item-done');
        itemDone.innerHTML = this.noteElements[this.number].done;
        
        checkbox.addEventListener('change', function () {
            noteListItem.classList.toggle('note-list__item--checked');
            if(noteListItem.classList.toggle('note-list_item--checked') === true) {
                itemWork.style.display = 'none';
                itemDone.style.display = 'block';
            } else {
                itemWork.style.display = 'block';
                itemDone.style.display = 'none';
            }
        });
    }
}

var newNote = new CreateNote(noteListItem, 2);
var newNote2 = new CreateNote(noteList, 3);
var newNote3 = new CreateNote(noteList, 1);
var newNote4 = new CreateNote(noteList, 0);