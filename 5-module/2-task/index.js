/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
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
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');

  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  let head = document.createElement('thead');
  let headRow = document.createElement('tr');
  let tableHead = ['Name', 'Age', 'Salary', 'City'];
  tableHead.forEach(function(item) {
    let cell = document.createElement('td');
    cell.innerHTML = item;
    headRow.appendChild(cell);
  });
  head.appendChild(headRow);
  this.el.appendChild(head);
  let tableBody = document.createElement('tbody');
  items.forEach(function(item) {
    let tableRow = document.createElement('tr');
    for (objItem in item) {
      let bodyCell = document.createElement('td');
      bodyCell.innerHTML = item[objItem];
      tableRow.appendChild(bodyCell);
      tableBody.appendChild(tableRow);
    }
  });
  this.el.appendChild(tableBody);
  this.sort = (column, desc = false) => {
    let peopleArray = Array.from(tableBody.rows);
    if (column === 0) {
      let compare = function(a, b) {
        console.log(a.cells[column].innerHTML > b.cells[column].innerHTML);
        return a.cells[column].innerHTML > b.cells[column].innerHTML ? 1 : -1;
      };
      peopleArray.sort(compare);
      if (desc === true) {
        peopleArray.reverse();
      }
      tableBody.append(...peopleArray);
    }
    if (column === 2) {
      let compare = function(a, b) {
        return a.cells[column].innerHTML - b.cells[column].innerHTML;
      };
      peopleArray.sort(compare);
      if (desc === true) {
        peopleArray.reverse();
      }
      tableBody.append(...peopleArray);
    }
  };
}


