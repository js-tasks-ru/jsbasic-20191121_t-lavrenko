const END = 'завершенно'; // данные текст нужно выводить если событие прошло
const MS_IN_SEC = 1000; // количество миллисекнуд в секнуден
const MS_IN_MINUTE = 60 * MS_IN_SEC;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;


class TimeLeft {
  /**
   * @param el {Element} - ссылка на корневой элемент
   */
  constructor(el) {
    this.el = el;
    let from = this.el.getAttribute('data-from');
    let to = this.el.getAttribute('data-to');
    let fromDate = this.parseDate(from);
    let toDate = this.parseDate(to);
    
    let leftDays = Math.floor((toDate - fromDate) / MS_IN_DAY);
    let leftHours = Math.floor(((toDate - fromDate) / MS_IN_HOUR) - leftDays * 24);
    let leftMinutes = Math.floor(((toDate - fromDate) / MS_IN_MINUTE) - leftDays * 24 * 60 - leftHours * 60);
    let leftSeconds = Math.floor(((toDate - fromDate) / MS_IN_SEC) - leftDays * 24 * 60 * 60 - leftHours * 60 * 60 - leftMinutes * 60);
    let dpoint = ', ';
    let hpoint = ', ';
    let mpoint = ', ';
    
    let daySign;
    if (leftDays == 1) {
      daySign = ' день';
    }
    else if (leftDays > 1 && leftDays < 5) {
      daySign = ' дня';
    }
    else if (leftDays >= 5) {
      daySign = ' дней';
    }
    else if (leftDays == 0) {
      daySign = '';
      leftDays = '';
      dpoint = '';
    }
    
    let hoursSign;
    if (leftHours == 1) {
      hoursSign = ' час';
    }
    else if (leftHours > 1 && leftHours < 5) {
      hoursSign = ' часа';
    }
    else if (leftHours >= 5) {
      hoursSign = ' часов';
    }
    else if (leftHours == 0) {
      hoursSign = '';
      leftHours = '';
      hpoint = '';
    }
  
    let minSign;
    if (leftMinutes == 1) {
      minSign = ' минута';
    }
    else if (leftMinutes > 1 && leftMinutes < 5) {
      minSign = ' минуты';
    }
    else if (leftMinutes >= 5) {
      minSign = ' минут';
    }
    else if (leftMinutes == 0) {
      minSign = '';
      leftMinutes = '';
      mpoint = '';
    }

    let secSign;
    if (leftSeconds == 1) {
      secSign = ' секунда';
    }
    else if (leftSeconds > 1 && leftSeconds < 5) {
      secSign = ' секунды';
    }
    else if (leftSeconds >= 5) {
      secSign = ' секунд';
    }
    else if (leftSeconds == 0) {
      secSign = '';
      leftSeconds = '';
      mpoint = '';
    }

    if ((leftSeconds == 0) && (leftMinutes == 0)) {
      hpoint = '';
    }
    if ((leftSeconds == 0) && (leftMinutes == 0) && (leftHours == 0)) {
      dpoint = '';
    }

    if ((fromDate > toDate) || !this.el.hasAttribute('data-from') || !this.el.hasAttribute('data-to')) {
      this.el.innerHTML = END;
    }
    else {
      this.el.innerHTML = leftDays + daySign + dpoint + leftHours + hoursSign + hpoint + leftMinutes + minSign + mpoint + leftSeconds + secSign;
    }
  }

  /**
   * Форматируем строку в дату. Чтобы написать данный метод нужно почитать главу http://learn.javascript.ru/datetime
   * @param {string} str - строка с датой в формате `year.month.day hours:minutes:second`
   * @return {Date} - возвращаем объект даты
   */
  parseDate(str) {
    let date;
    return date = new Date(str);
  }

  /**
   * Статчный метод, который можно вызывать не посредственно от класса, а не от объекта.
   * Подробнее здесь http://learn.javascript.ru/es-class#staticheskie-svoystva
   * @param el
   */
  static create(el) {
    return new TimeLeft(el);
  }
}

window.TimeLeft = TimeLeft;
