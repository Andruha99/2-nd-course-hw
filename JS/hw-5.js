// Task 1

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Task 2

function isEven(a) {
  if (a % 2 === 0) {
    console.log(`Число ${a} четное`);
  } else {
    console.log(`Число ${a} нечетное`);
  }
}

// Task 3.1

const numSquare = (a) => {
  console.log(`Квадрат числа ${a} равен ${a ** 2}`);
};

// Task 3.2

const anotherNumSquare = (a) => {
  return a ** 2;
};

// Task 4

const greetAge = (age) => {
  if (age < 0) {
    console.log("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    console.log("Привет, друг!");
  } else {
    console.log("Добро пожаловать!");
  }
};

// Task 5

const mult = (a, b) => {
  if (isNaN(a) || isNaN(b) || typeof a !== "number" || typeof b !== "number") {
    console.log("Одно или оба значения не являются числом");
  } else {
    console.log(a * b);
  }
};

// Task 6

const setCube = (a) => {
  if (typeof a !== "number") {
    return "Переданный параметр не является числом";
  } else {
    return `${a} в кубе равняется ${a ** 3}`;
  }
};

// Task 7

function getArea() {
  return Math.PI * this.radius ** 2;
}

function getPerimetr() {
  return 2 * Math.PI * this.radius;
}

const circle1 = {
  radius: 2,
  getArea: getArea,
  getPerimetr: getPerimetr,
};

const circle2 = {
  radius: 4,
  getArea: getArea,
  getPerimetr: getPerimetr,
};
