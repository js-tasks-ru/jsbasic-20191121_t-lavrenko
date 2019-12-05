/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let newData = '';
  data.forEach((item) => {
    if (item.age <= age) {
      newData += item.name + ', ' + item.balance + '\n';
    }  
  }
  );
  let result = newData.slice(0, length - 1);
  return result;
}
