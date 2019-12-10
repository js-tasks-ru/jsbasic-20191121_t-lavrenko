/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let list = document.createElement('ul');
  friends.forEach((item) => {
    let listPoint = document.createElement('li');
    listPoint.append(item.firstName);
    listPoint.append(item.lastName);
    list.append(listPoint);
  });
  return list;
}
