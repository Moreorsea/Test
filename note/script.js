'use strict';

var noteList = document.querySelector('.note-list'); //обложка
//var noteElements = noteList.children;
//console.log(noteElements);
var noteListItem = document.querySelector('.note-list__item');
console.log(noteListItem);
var noteListName = document.querySelector('.note-list__item-name');

class CreateNote {
    constructor (container){
      this.container = noteList;
      //массив объектов
      this.noteElements = [
        {
            noteName: 'Заметка 1',
            text: 'Погладить котика'
          },
          {
            noteName: 'Заметка 2',
            text: 'Погладить котика'
          },
          {
            noteName: 'Заметка 3',
            text: 'Погладить котика'
          },
          {
            noteName: 'Заметка 4',
            text: 'Погладить котика'
          }
      ];
      console.log(this.noteElements[1].noteName);
    }
    createNote (){
        console.log(this.noteElements[1].noteName);

    }
}

var newNote = new CreateNote(noteList);