'use strict';

let noteList = document.querySelector('.note-list'); //обложка


class Note {
    //создаю заметку
    //меняю состояние заметки
    constructor (info) {
        this.elementInfo = info;
        this.checked = info.checked;

    }
    createNote(transferNote){
    //создать HTML-разметку
    var listItem = document.createElement('li');
    listItem.classList.add('note-list__item');
    listItem.setAttribute('id', '');
    listItem.innerHTML = '<label class="note-list__item-wrapper"><div class="note-list__item-wrapper-text"><p class="note-list__item-name"></p><p class="note-list__item-work"></p><p class="note-list__item-done"></p></div><input type="checkbox" class="note-list__item-input"><span class="note-list__item-text"></span></label>';
    
    //скопировать шаблон, чтобы получить пустую разметку заметки
    var elementItem = listItem.cloneNode(true);
    noteList.appendChild(elementItem);
    
    

    elementItem.querySelector('.note-list__item-input').addEventListener('click', () => {
      //var elementId = elementItem.getAttribute('id');
      //console.log(elementId);
      this.checked = !this.checked;
      //console.log(this.checked);
      transferNote(this);
      if(this.checked) {
        elementItem.querySelector('.note-list__item-work').innerHTML = 'Сделано';
        elementItem.classList.add('note-list__item--checked');
        var currentElement = elementItem;
        noteList.removeChild(elementItem);
        noteList.appendChild(currentElement);
      } else {
        elementItem.querySelector('.note-list__item-work').innerHTML = 'В работе';
        elementItem.classList.remove('note-list__item--checked');
        //var currentElement = elementItem;
        //noteList.removeChild(elementItem);
        //noteList.insertBefore(currentElement, noteList.firstChild);
        //console.log(elementItem.getAttribute('id'));
        
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
          let newElement = new Note(noteElement).createNote((element) => {this.transferNote (element, this.arrNote);});         
          newElement.querySelector('.note-list__item-name').innerHTML = this.noteElements[index].noteName;
          newElement.querySelector('.note-list__item-text').innerHTML = this.noteElements[index].text;
          newElement.querySelector('.note-list__item-work').innerHTML = 'В работе';
          var difElement = newElement.querySelector('.note-list__item-wrapper');
          difElement.parentNode.setAttribute('id', index);
          this.arrNote[index] = newElement; 
          this.listUnchecked[index] = new Note(noteElement);
          this.listUnchecked[index].elementInfo.id = index;
          
        })  
        console.log(this.listUnchecked); //id присваиваются корректно
 
    }
    transferNote (element) {
      //здесь будут перекидываться заметки
      if(element.checked) {
        //console.log(element.elementInfo.id);
        var swap = element;
        this.listChecked.push(element);
        this.listUnchecked.splice(element.elementInfo.id, 1);
        this.sortArray();
      }

      else {
        this.listUnchecked.push(element);
        this.listChecked.splice(element.elementInfo.id, 1);
        this.sortArray();
      }
    }

    sortArray () {
      this.listChecked.sort((prev, next) => prev.elementInfo.id - next.elementInfo.id);
      //console.log(this.listUnchecked.sort((prev, next) => prev.elementInfo.id - next.elementInfo.id));
      console.log(this.listChecked);
      //this.listUnchecked.sort((prev, next) => prev.elementInfo.id - next.elementInfo.id);
      console.log(this.listUnchecked);
      
      //this.newArray = this.listUnchecked.concat(this.listChecked);
      //console.log(this.newArray);
      //return this.newArray;
    }
  
    renderList (){
      //this.noteList.innerHTML = '';
      console.log(this.listUnchecked);

      //this.newArray.forEach((note) => {
        //this.noteList.appendChild(note);
     // });
      
     // this.arrNote.forEach((note) => {
       // this.noteList.appendChild(note);

        //});
    }
}

var newList = new List(noteList);
