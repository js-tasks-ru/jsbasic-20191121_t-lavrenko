/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.el.classList.add('pure-table');
    this.data = data;
    let head = document.createElement('thead');
    let headRow = document.createElement('tr');
    let tableHead = ['Name', 'Age', 'Salary', 'City', ''];
    tableHead.forEach(function(item) {
      let cell = document.createElement('td');
      cell.innerHTML = item;
      headRow.appendChild(cell);
    });
    head.appendChild(headRow);
    this.el.appendChild(head);
    let tableBody = document.createElement('tbody');
    this.data.forEach(function(item) {
      let tableRow = document.createElement('tr');
      for (let objItem in item) {
        if (objItem !== 'id') {
          let bodyCell = document.createElement('td');
          bodyCell.innerHTML = item[objItem];
          tableRow.appendChild(bodyCell);
          tableBody.appendChild(tableRow);
        }
      }
      let bodyCell = document.createElement('td');
      let cross = document.createElement('a');
      cross.innerHTML = 'X';
      cross.setAttribute('cross-id', item.id);
      cross.setAttribute('href', '#delete');
      bodyCell.appendChild(cross);
      tableRow.appendChild(bodyCell);
    });
    this.el.appendChild(tableBody);
    this.el.onclick = this.handler.bind(this);
  }

  handler(event) {
    if (!event.target.hasAttribute('cross-id')) {
      return;
    }
    let id = +event.target.getAttribute('cross-id');
    let toDel = event.target.closest('tr');
    toDel.remove();
    this.onRemoved(id);
  }

  /**
   * Метод который выщывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    return console.log(`Из таблицы удален пользователь ${id}`);
  }
}

window.ClearedTable = ClearedTable;
