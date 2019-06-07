'use strict';

var noteList = document.querySelector('.note-list'); //обложка
//var noteElements = noteList.children;
//console.log(noteElements);
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
            text: 'Ели мясо мужики'
          },
          {
            noteName: 'Заметка 2',
            text: 'Пивом запивали'
          },
          {
            noteName: 'Заметка 3',
            text: 'О чем конюх говорил',
            work: 'В работе',
            done: 'Сделано'
          },
          {
            noteName: 'Заметка 4',
            text: 'Они не понимали'
          }
      ];
      this.number = number;
      console.log(this.noteElements[1].noteName);
      this.createNote();
    }
    createNote (){
        console.log('Выводится');
        var template = noteListItem.cloneNode(true);
        console.log(template);
        template.querySelector('.note-list__item-name').innerHTML = this.noteElements[this.number].noteName;
        template.querySelector('.note-list__item-text').innerHTML = this.noteElements[this.number].text;
        noteList.appendChild(template);
        console.log(this.number);
        //template.querySelector('.note-list__item-work').innerHTML = this.noteElements[this.number].done;

        var checkbox = template.querySelector('.note-list__item-input');
        var itemWork =  template.querySelector('.note-list__item-work');
        console.log(itemWork);
        var itemDone = template.querySelector('.note-list__item-done');
        console.log(itemDone);
        
        checkbox.addEventListener('change', function () {
            console.log('Тык-тык');
            template.classList.toggle('note-list__item--checked');
            console.log(template.classList.contains('note-list__item--checked'));
            //template.querySelector('.note-list__item-work').innerHTML = this.noteElements.done;
            if(template.classList.toggle('note-list_item--checked') === true) {
                itemWork.style.display = 'none';
                itemDone.style.display = 'block';
                console.log('Вижу цель');
                noteList.appendChild(template);
            } else {
                itemWork.style.display = 'block';
                itemDone.style.display = 'none';
                noteList.unshift(template);
            }
        });
        
        var noteListElements = noteList.children;
        for(var j = 0; j < noteListElements.length; j++) {
            console.log(noteListElements[j]);
        }
    }
}

var newNote = new CreateNote(noteList, 2);
var newNote2 = new CreateNote(noteList, 3);
var newNote3 = new CreateNote(noteList, 1);
var newNote4 = new CreateNote(noteList, 0);