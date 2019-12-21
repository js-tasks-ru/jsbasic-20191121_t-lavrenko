/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tableList = table.getElementsByTagName('tbody');
  for (let o = 0; o < tableList.length; o++) {
    let people = tableList[o].getElementsByTagName('tr');
    for (let i = 0; i < people.length; i++) {
      let status = people[i].getElementsByTagName('td');
      for (let j = 0; j < status.length; j++) {
        let avail = status[j].getAttribute('data-available');
        let ageNew = parseInt(status[1].innerHTML);
        if (avail === 'true') {
          people[i].classList.add('available');
        }
        if (avail === 'false') {
          people[i].classList.add('unavailable');
        }
        if (ageNew < 18) {
          people[i].setAttribute('style', 'text-decoration: line-through');
        }
        if (status[j].innerHTML == 'm') {
          people[i].classList.add('male');
        }
        if (status[j].innerHTML == 'f') {
          people[i].classList.add('female');
        }
        if (avail === null) {
          people[i].setAttribute('hidden', 'true');
        }
      }
    }
  }
}
