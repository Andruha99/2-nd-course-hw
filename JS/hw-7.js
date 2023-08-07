// Task 1

const str = "строка";
console.log(str.toLocaleUpperCase());

// Task 2

const searchStart = (arr, str) => {
  const newArr = arr.filter((item) =>
    item.toLowerCase().startsWith(str.toLowerCase())
  );

  console.log(newArr);
};

searchStart(["Кошка", "Кит", "Комар", "Носорог"], "ко"); // ['кошка', 'комар']
searchStart(["яблоко", "груша", "гриб", "огурец"], "гру"); // ['груша']
searchStart(["Дом", "Банк", "Больница", "Театр"], "Кино"); // []

// Task 3

const num = 32.58884;

console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));

// Task 4

console.log(`Наибольшее число ${Math.max(52, 53, 49, 77, 21, 32)}`);
console.log(`Наименьшее число ${Math.min(52, 53, 49, 77, 21, 32)}`);

// Task 5

const getRandom = () => {
  return Math.floor(Math.random() * 10 + 1);
};

// Task 6

const getRandomArrNumbers = (num) => {
  const arr = [];
  for (let i = 0; i < Math.floor(num / 2); i++) {
    arr.push(Math.floor(Math.random() * (num + 1)));
  }
  console.log(arr);
};

getRandomArrNumbers(7);
getRandomArrNumbers(12);

// Task 7

const getRandomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
};

getRandomNumber(5, 7);

// Task 8

const myDate = new Date();
console.log(myDate);

// Task 9

const currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Task 10

const getDateOnRussian = (newDate) => {
  const monthsOnRus = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const daysOnRus = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];

  let hour = newDate.getHours();
  let min = newDate.getMinutes();
  let sec = newDate.getSeconds();

  if (hour <= 9) {
    hour = "0" + hour;
  }

  if (min <= 9) {
    min = "0" + min;
  }

  if (sec <= 9) {
    sec = "0" + sec;
  }

  console.log(
    `Дата: ${newDate.getDate()} ${
      monthsOnRus[newDate.getMonth()]
    } ${newDate.getFullYear()} - это ${daysOnRus[newDate.getDay()]}`
  );
  console.log(`Время: ${hour}:${min}:${sec}`);
};

getDateOnRussian(myDate);
