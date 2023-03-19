// Assignment 1
let today = new Date().getTime();
let myBirthday = new Date('96 3 11').getTime();
let ageTimestamp = today - myBirthday;
let seconds = ageTimestamp / 1000;
let minutes = seconds / 60;
let hours = minutes / 60;
let days = hours / 24;
let months = days / 12;
let years = days / 365;

console.log(`${Math.round(seconds)} Seconds`);
console.log(`${Math.round(minutes)} Minutes`);
console.log(`${Math.round(hours)} Hours`);
console.log(`${Math.round(days)} Days`);
console.log(`${Math.round(months)} Months`);
console.log(`${Math.round(years)} Years`);

//----------------------------------------------------------------------------------------------------------------------

// Assignment 2
let startOfTime = new Date('1980 1 1');
startOfTime.setSeconds(1);
console.log(new Date(startOfTime));

//----------------------------------------------------------------------------------------------------------------------

// Assignment 3
const MONTHS = [
  'January',
  'Febraury',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
let lastDay = new Date(new Date().setDate(0));
console.log(lastDay);
console.log(`Previous Month Is ${MONTHS[lastDay.getMonth()]} And Last Day Is ${lastDay.getDate()}`);

//----------------------------------------------------------------------------------------------------------------------

// Assignment 4
let bday1 = new Date('96 3 11');
let bday2 = Date.parse('96 3 11');
let bday3 = new Date();
bday3.setFullYear(1996, 2);
bday3.setDate(11);
console.log(new Date(bday1));
console.log(new Date(bday2));
console.log(new Date(bday3));
