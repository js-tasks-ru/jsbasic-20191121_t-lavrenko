/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

let m = prompt('insert m');
let n = prompt('insert n');
 
function pow(m, n) {
  if ((m && n > 1) && Math.round(m) === m && Math.round(n) === n) {
    let result = Math.pow(m, n);
    return result;
  }
}
