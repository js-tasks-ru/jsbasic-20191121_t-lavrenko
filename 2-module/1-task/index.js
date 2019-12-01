/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] !== 'object') {
      newObj[key] = obj[key];
    }
    else if (typeof obj[key] == 'object') {
      newObj[key] = {};
      for (let secondKey in obj[key]) {
        if (typeof obj[key][secondKey] !== 'object') {
          newObj[key][secondKey] = obj[key][secondKey];
        }
        else if (typeof obj[key][secondKey] == 'object') {
          newObj[key][secondKey] = {};
          for (let thirdKey in obj[key][secondKey]) {
            newObj[key][secondKey][thirdKey] = obj[key][secondKey][thirdKey];
          }
        }
      }
    }
  }
  return newObj;
}