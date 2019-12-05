/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {};
  let arrChart = str.split('');
  arrChart.forEach((item, index) => {
    if (item == ',') {
      arrChart[index] = ' ';
    }
  });
  let stringClean = arrChart.join('');
  let arrForSort = stringClean.split(' ');
  let sortedArr = arrForSort.sort((a, b) => a - b);
  result.min = Number(sortedArr[0]);
  result.max = Number(sortedArr[sortedArr.length - 1]);
  return result;
}
