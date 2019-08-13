'use strict';

let noteList = document.querySelector('.note-list'); //обложка


class Note {
    //создаю заметку
    //меняю состояние заметки
    constructor (info) {
        this.elementInfo = info;
        this.checked = info.checked;
        this.id = info.id;
        //this.createNote();
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
    
    //заполнять заметки тут
    elementItem.querySelector('.note-list__item-name').innerHTML = this.elementInfo.noteName;
    elementItem.querySelector('.note-list__item-text').innerHTML = this.elementInfo.text;
    elementItem.querySelector('.note-list__item-work').innerHTML = 'В работе';
    elementItem.querySelector('.note-list__item-wrapper').parentNode.setAttribute('id', this.elementInfo.id);
    //console.log(elementItem);

    elementItem.querySelector('.note-list__item-input').addEventListener('click', () => {
      this.checked = !this.checked;
      console.log(this);
      transferNote(this);
      //new List(noteList).transferNote(this);
     // console.log(new List(noteList).transferNote(this));
      console.log(transferNote(this)); //отрабатывает корректно, если спрятать вызов transferNote выше
      //console.log(transferNote(this));
      function removeElement (element) {
        noteList.removeChild(element);
      };
      if(this.checked) {
        elementItem.querySelector('.note-list__item-work').innerHTML = 'Сделано';
        elementItem.classList.add('note-list__item--checked');
        
        this.elementInfo.checked = this.checked;
        var currentElement = elementItem;
        console.log(currentElement);
        removeElement(elementItem);
        noteList.appendChild(currentElement);
      } else {
        elementItem.querySelector('.note-list__item-work').innerHTML = 'В работе';
        elementItem.classList.remove('note-list__item--checked');
        var currentElement = elementItem;
        this.elementInfo.checked = this.checked;
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
          checked: false,
          id: 0
        },
        {
          noteName: 'Заметка 2',
          text: 'Пивом запивали',
          checked: false,
          id: 1
        },
        {
          noteName: 'Заметка 3',
          text: 'О чем конюх говорил',
          checked: false,
          id: 2
        },
        {
          noteName: 'Заметка 4',
          text: 'Они не понимали',
          checked: false,
          id: 3
        }
    ];
     this.sortArray();
    }

    transferNote (element) {
      //здесь будут перекидываться заметки
      console.log(element);
      console.log(element.checked); // выводит
      console.log(element.elementInfo.checked); //выводит
     element.elementInfo.checked = true;
      var elementId = element.elementInfo.id;
      console.log(elementId);
      this.listUnchecked = [];
      this.listChecked = [];
      var index = 0;
      if(element.checked) {
        this.noteElements.forEach(() => {
          if(this.noteElements[index].checked === false) {
            this.listUnchecked.push(this.noteElements[index]);
          } else {
            this.listChecked.push(this.noteElements[index]);
          }
          index++;
          
        });
        
        console.log(this.listChecked);
          console.log(this.listUnchecked);
          //this.sortArray();
          //this.renderList();
      } else {
         element.elementInfo.checked = false;
          this.noteElements.forEach(() => {
            if(this.noteElements[index].checked === false) {
              this.listUnchecked.push(this.noteElements[index]);
              if(this.listUnchecked.length === 4) {
                this.listChecked = [];
              }
            } else {
              this.noteElements[index].id === elementId;
              if(this.noteElements[index].id === elementId) {
                this.listChecked.splice(this.noteElements[index], 1);
              }
            }
            index++;
            console.log(this.listChecked);
            console.log(this.listUnchecked);
          });
         
          console.log(this.listChecked);
          console.log(this.listUnchecked);
          //this.sortArray();
          //this.renderList();
      }
    }

    sortArray () {
      this.listChecked.sort((prev, next) => prev.id - next.id);
      console.log(this.listChecked);
      
      this.listUnchecked.sort((prev, next) => prev.id - next.id);
      console.log(this.listUnchecked);
      
      this.newArray = this.listUnchecked.concat(this.listChecked);
      console.log(this.listUnchecked.concat(this.listChecked));
      console.log(this.newArray);       
      this.renderList();              
    }
  
    renderList (){
      //console.log(this.noteList);
     this.noteList.innerHTML = '';
     //this.createNote(this.transferNote(element));
     //console.log(this.noteElements);

      //console.log(this.newArray);
      this.noteElements.forEach(() => {
        var newItem = new Note(this.noteElements[this.index]).createNote((element)=>{
          this.transferNote(element);
          console.log(this.transferNote(element));
          console.log(element);
          //console.log(this.noteElements[this.index].createNote(element));
        });
        console.log(newItem);
        this.index++;
        this.noteList.appendChild(newItem);
        //console.log(this.noteList);
      });
    }
}

var newList = new List(noteList);
