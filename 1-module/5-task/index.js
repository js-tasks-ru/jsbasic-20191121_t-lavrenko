/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let result = str
  if (str.length > maxlength) {
    result = str.slice(0, maxlength-1) + '…'
  }
  return result
}
