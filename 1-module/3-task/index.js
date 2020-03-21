/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let result = str
  if (typeof(str[0]) == 'string') {
    if (str.length == 1) {
      result = str[0].toUpperCase()
    } else {
      result = str[0].toUpperCase() + str.slice(1)
    }
  }
  return result
}
