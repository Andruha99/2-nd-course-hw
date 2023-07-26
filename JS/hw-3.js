// //Task 1

const password = "пароль";
const userPassword = prompt("Введите пароль");

if (password === userPassword) {
  console.log("Пароль введен верно");
} else {
  console.log("Пароль введен неправильно");
}

//Task 2
const c = 34;

if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//Task 3
const d = 36;
const e = 76;

if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

//Task 4

let a = "2";
let b = "3";

alert(Number(a) + Number(b));

//Task 5

const month = 2;

switch (month) {
  case 1:
    console.log("Зима");
    break;

  case 2:
    console.log("Зима");
    break;

  case 3:
    console.log("Весна");
    break;

  case 4:
    console.log("Весна");
    break;

  case 5:
    console.log("Весна");
    break;

  case 6:
    console.log("Лето");
    break;

  case 7:
    console.log("Лето");
    break;

  case 8:
    console.log("Лето");
    break;

  case 9:
    console.log("Осень");
    break;

  case 10:
    console.log("Осень");
    break;

  case 11:
    console.log("Осень");
    break;

  case 12:
    console.log("Зима");
    break;

  default:
    console.log("Месяца не существует");
    break;
}

//Task 7

const number = Number(prompt("Пожалуйста, введите любое число"));

if (isNaN(number)) {
  alert("Вы ввели не число");
} else if (number % 2 === 0) {
  alert(`Число ${number} чётное`);
} else {
  alert(`Число ${number} нечётное`);
}

//Task 8

const clientOS = 0;

if (clientOS === 0) {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
  console.log("Установите версию приложения для Android по ссылке");
}

//Task 9

const prodYear = 2016;

if (clientOS === 0 && prodYear <= 2015) {
  console.log("Установите облегченную версию приложения для iOS по ссылке");
} else if (clientOS === 0 && prodYear > 2016) {
  console.log("Установите версию приложения для iOS по ссылке");
}

if (clientOS === 1 && prodYear <= 2015) {
  console.log("Установите облегченную версию приложения для Android по ссылке");
} else if (clientOS === 1 && prodYear > 2016) {
  console.log("Установите версию приложения для Android по ссылке");
}
