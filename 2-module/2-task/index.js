/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let count = 0;
  for (let key in obj) {
    count += 1;
  }
  if (count == 0) {
    return true;
  }
  if (count !== 0) {
    return false;
  }
}
