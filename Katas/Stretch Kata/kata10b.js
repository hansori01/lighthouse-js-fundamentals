/*

Kata 10 - Talking Calendar

convert date strings from '2017/12/02' ---> 'December 2nd, 2017'

Use a date as a string (not Date object) formatted YYYY/MM/DD.

*/

// turns numeric days(strings) into word format
const days = calcDay => {
  switch (calcDay[1]) {
    case '1': calcDay += 'st'; break;
    case '2': calcDay += 'nd'; break;
    case '3': calcDay += 'rd'; break;
    default: calcDay += 'th'; break;
  }
  if (calcDay[0] === '0') {
    calcDay = calcDay.substring(1)
  }
  return ' ' + calcDay + ', ';
}
// turns numeric months(strings) into word format
const months = calcMon => {
  switch (calcMon) {
    case '01': calcMon = "January"; break;
    case '02': calcMon = "February"; break;
    case '03': calcMon = "March"; break;
    case '04': calcMon = "April"; break;
    case '05': calcMon = "May"; break;
    case '06': calcMon = "June"; break;
    case '07': calcMon = "July"; break;
    case '08': calcMon = "August"; break;
    case '09': calcMon = "September"; break;
    case '10': calcMon = "October"; break;
    case '11': calcMon = "November"; break;
    case '12': calcMon = "December"; break;
  }
  return calcMon;
}
// FINAL function
const talkingCalendar = function (date) {
  let dateSplit = date.split('/');
  let wordDay = days(dateSplit[2]);
  let wordMon = months(dateSplit[1]);
  return wordMon + wordDay + dateSplit[0];
};
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));







