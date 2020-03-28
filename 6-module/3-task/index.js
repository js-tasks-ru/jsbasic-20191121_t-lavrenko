'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    let listGroup = document.createElement('ul');
    listGroup.classList.add('list-group');
    listGroup.classList.add('sidebar');

    let listGroupItemOne = document.createElement('li');
    listGroupItemOne.classList.add('list-group-item');
    listGroupItemOne.classList.add('dropdown');
    let navLinkOne = document.createElement('a');
    navLinkOne.classList.add('nav-link');
    navLinkOne.classList.add('dropdown-toggle');
    navLinkOne.setAttribute('id', 'cameraphotos');
    navLinkOne.innerHTML = 'Camera &amp; Photo';
    let firstDropDown = document.createElement('ul');
    firstDropDown.classList.add('dropdown-menu');

    let dropDownItemOne = document.createElement('li');
    dropDownItemOne.setAttribute('data-id', 'cameraphotos_accessories');
    dropDownItemOne.classList.add('dropdown-item');
    let dropDownItemLinkOne = document.createElement('a');
    dropDownItemLinkOne.innerHTML = 'Accessories';
    dropDownItemOne.appendChild(dropDownItemLinkOne);

    firstDropDown.appendChild(dropDownItemOne);
    listGroupItemOne.appendChild(navLinkOne);
    listGroupItemOne.appendChild(firstDropDown);
    listGroup.appendChild(listGroupItemOne);
    
    let listGroupItemTwo = document.createElement('li');
    listGroupItemTwo.classList.add('list-group-item');
    listGroupItemTwo.classList.add('dropdown');
    let navLinkTwo = document.createElement('a');
    navLinkTwo.classList.add('nav-link');
    navLinkTwo.classList.add('dropdown-toggle');
    navLinkTwo.setAttribute('id', 'cinema');
    navLinkTwo.innerHTML = 'Home Cinema, TV &amp; Video';
    let secondDropDown = document.createElement('ul');
    secondDropDown.classList.add('dropdown-menu');

    let dropDownItemTwoOne = document.createElement('li');
    dropDownItemTwoOne.setAttribute('data-id', 'cinema_audio');
    dropDownItemTwoOne.classList.add('dropdown-item');
    let dropDownItemLinkTwoOne = document.createElement('a');
    dropDownItemLinkTwoOne.innerHTML = 'Audio';
    dropDownItemTwoOne.appendChild(dropDownItemLinkTwoOne);

    let dropDownItemTwoTwo = document.createElement('li');
    dropDownItemTwoTwo.setAttribute('data-id', 'cinema_video');
    dropDownItemTwoTwo.classList.add('dropdown-item');
    let dropDownItemLinkTwoTwo = document.createElement('a');
    dropDownItemLinkTwoTwo.innerHTML = 'Video';
    dropDownItemTwoTwo.appendChild(dropDownItemLinkTwoTwo);

    secondDropDown.appendChild(dropDownItemTwoOne);
    secondDropDown.appendChild(dropDownItemTwoTwo);
    listGroupItemTwo.appendChild(navLinkTwo);
    listGroupItemTwo.appendChild(secondDropDown);
    listGroup.appendChild(listGroupItemTwo);

    element.appendChild(listGroup)
    this.makeDropDown(listGroupItemOne);
    this.makeDropDown(listGroupItemTwo);
  }

  makeDropDown(item) {
    let menu = item.getElementsByClassName('dropdown-menu')[0];
    let back = document.getElementsByClassName('backdrop')[0];

    function handlerEnter() {
      menu.classList.add('show')
      back.classList.add('show')
    };
    
    function handlerLeave() {
      menu.classList.remove('show')
      back.classList.remove('show')
    };

    item.addEventListener('pointerenter', handlerEnter)
    item.addEventListener('pointerleave', handlerLeave)
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;