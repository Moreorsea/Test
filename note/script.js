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
    
    

    elementItem.querySelector('.note-list__item-input').addEventListener('click', (evt) => {
      //var elementId = elementItem.getAttribute('id');
      //console.log(elementId);
      this.checked = !this.checked;
      console.log(this.checked);
      transferNote();
      if(this.checked === true) {
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
          let newElement = new Note(noteElement).createNote(() => {this.transferNote (newElement, this.arrNote);});         
          newElement.querySelector('.note-list__item-name').innerHTML = this.noteElements[index].noteName;
          newElement.querySelector('.note-list__item-text').innerHTML = this.noteElements[index].text;
          newElement.querySelector('.note-list__item-work').innerHTML = 'В работе';
          var difElement = newElement.querySelector('.note-list__item-wrapper');
          difElement.parentNode.setAttribute('id', index);
          this.arrNote[index] = newElement; 
        })   
            

        /*var elementChecked = [];
        var elementUnchecked = this.arrNote;

        for(var index = 0; index < elementUnchecked.length; index++) {
          this.arrNote[index].addEventListener('click', (evt) => {
            var currentTarget = evt.currentTarget;
            var itemInput = currentTarget.querySelector('.note-list__item-input');
            if(itemInput.checked === true) { //отрабатывает более-менее корректно
              console.log(currentTarget);
              //elementUnchecked.splice(currentTarget.getAttribute('id'), 1);
              elementUnchecked.splice(currentTarget, 1);
              elementChecked.push(currentTarget);
              console.log(elementUnchecked);
              console.log(elementChecked);
              return elementUnchecked;
              
            } else {
              console.log(elementUnchecked);
              console.log(currentTarget);
              elementUnchecked.push(currentTarget);
              console.log(elementUnchecked);
            }
          });
        }   */    
    }
    transferNote (note, array) {
      //здесь будут перекидываться заметки
      var listChecked = [];
     var listUnchecked = array;
      console.log(listUnchecked);
      //for(var i = 0; i < 4; i++) {
        //console.log(listUnchecked[i]);
        //if(listUnchecked[i].classList.toggle('note-list__item--checked')) {
          console.log('Кликнули по элементу ' + note);
        //}
      //}
     //var currentTarget = evt.currentTarget;
     // console.log(currentTarget);

    }
  
    renderList (){
      this.noteList.innerHTML = '';
      //console.log(elementUnchecked);
      
      this.arrNote.forEach((note) => {
        this.noteList.appendChild(note);
        //вывод отрисовываемых элементов, они не чекнуты
        //console.log(note);
        
        //массив для чекнутых элементов
        
        });
        //});

      //});
    }
}

var newList = new List(noteList);
