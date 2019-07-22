'use strict';

let noteList = document.querySelector('.note-list'); //обложка


class Note {
    //создаю заметку
    //меняю состояние заметки
    constructor (info) {
        this.elementInfo = info;
        this.checked = info.checked;
        //this.createNote(this.transferNote);

    }
    createNote(transferNote){
    //создать HTML-разметку
    console.log(this.elementInfo);
    var listItem = document.createElement('li');
    listItem.classList.add('note-list__item');
    listItem.setAttribute('id', '');
    listItem.innerHTML = '<label class="note-list__item-wrapper"><div class="note-list__item-wrapper-text"><p class="note-list__item-name"></p><p class="note-list__item-work"></p><p class="note-list__item-done"></p></div><input type="checkbox" class="note-list__item-input"><span class="note-list__item-text"></span></label>';
    
    //скопировать шаблон, чтобы получить пустую разметку заметки
    var elementItem = listItem.cloneNode(true);
    noteList.appendChild(elementItem);
    
    //заполнять заметки тут
    elementItem.querySelector('.note-list__item-name').innerHTML = this.elementInfo.noteName;
    elementItem.querySelector('.note-list__item-text').innerHTML = this.elementInfo.text;
    elementItem.querySelector('.note-list__item-work').innerHTML = 'В работе';


    elementItem.querySelector('.note-list__item-input').addEventListener('click', () => {
      this.checked = !this.checked;
      transferNote(this);
      function removeElement (element) {
        noteList.removeChild(element);
      };
      if(this.checked) {
        elementItem.querySelector('.note-list__item-work').innerHTML = 'Сделано';
        elementItem.classList.add('note-list__item--checked');
        var currentElement = elementItem;
        removeElement(elementItem);
        noteList.appendChild(currentElement);
      } else {
        elementItem.querySelector('.note-list__item-work').innerHTML = 'В работе';
        elementItem.classList.remove('note-list__item--checked');
        var currentElement = elementItem;
        removeElement(elementItem);
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
     this.listChecked = [];
     this.listUnchecked = [];
     this.newArray = [];
     this.index = 0;
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
     this.renderList();
    }

    transferNote (element) {
      //здесь будут перекидываться заметки
      var elementId = element.elementInfo.id;
      function getList (array) {
        for(var i = 0; i < array.length; i++) {
          if(elementId === array[i].elementInfo.id) {
            array.splice(i, 1);
          }
        }
      };
      
      if(element.checked) {
        this.listChecked.push(element);
        getList(this.listUnchecked);
        if(this.listChecked.length === 4) {
          this.listUnchecked = [];
        }
        this.sortArray();
      }  else {
          this.listUnchecked.push(element);
          getList(this.listChecked);
          if(this.listUnchecked.length === 4) {
            this.listChecked = [];
          }
          this.sortArray();
        }
    }

    sortArray () {
      this.listChecked.sort((prev, next) => prev.elementInfo.id - next.elementInfo.id);
      console.log(this.listChecked);
      this.listUnchecked.sort((prev, next) => prev.elementInfo.id - next.elementInfo.id);
      console.log(this.listUnchecked);
      
      this.newArray = this.listUnchecked.concat(this.listChecked);
      console.log(this.newArray);
    }
  
    renderList (createNote){
      console.log(this.noteList);
     //this.noteList.innerHTML = '';
     //this.createNote(this.transferNote());
     console.log(this.noteElements);
      
      this.noteElements.createNote((element)=>{
        this.transferNote(element);
      });
      console.log(this.newArray);
      this.noteElements.forEach(() => {
        new Note(this.noteElements[this.index]);
        this.index++;
      });
    }
}

var newList = new List(noteList);
