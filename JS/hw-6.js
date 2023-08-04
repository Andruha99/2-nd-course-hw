// Task 1
const task1 = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < task1.length; i++) {
  console.log(task1[i]);
  if (task1[i] === 10) break;
}

// Task 2

task1.forEach((i, index) => {
  if (i === 4) {
    console.log(`У числа 4 позиция: ${index}`);
  }
});

// Task 3

const task3 = [1, 3, 5, 10, 20];

console.log(task3.join(""));

// Task 4

const task4 = [];

for (let i = 0; i < 3; i++) {
  task4[i] = [];

  for (let j = 0; j < 3; j++) {
    task4[i][j] = 1;
  }
}

console.log(task4);

// Task 5

const task5 = [1, 1, 1];

for (let i = 3; i < 6; i++) {
  task5.push(2);
}

// Task 6

const task6 = [9, 8, 7, "a", 6, 5];

const task6Sorted = task6.sort();
task6Sorted.pop();

console.log(task6Sorted);

// Task 7

const task7 = [9, 8, 7, 6, 5];
const userNumber = Number(prompt("Угадайте число"));
let checkNumber = 0;

if (task7.includes(userNumber)) {
  alert("Угадали");
} else {
  alert("Не угадали");
}

// Task 8

const task8 = "abcdef";
console.log(task8.split("").reverse().join(""));

// Task 9

const task9 = [
  [1, 2, 3],
  [4, 5, 6],
];

const task9Arr = [];

for (let arrItem of task9) {
  for (let item of arrItem) {
    task9Arr.push(item);
  }
}

console.log(task9Arr);

// Task 10

const task10 = [1, 2, 3];

for (let i = 0; i < task10.length; i++) {
  if (i === task10.length - 1) {
    console.log(task10[i]);
  } else {
    const sum = task10[i] + task10[i + 1];
    console.log(sum);
  }
}

// Task 11

const getSquareNumber = (arr) => {
  return arr.map((item) => item ** 2);
};

console.log(getSquareNumber(task10));

// Task 12

const getLengthWords = (arr) => {
  return arr.map((item) => item.length);
};

getLengthWords(["слово", "", "слог", "длинное предложение", "буква"]);

// Task 13

const filterPositive = (arr) => {
  return arr.filter((item) => item < 0);
};

console.log(filterPositive([-1, 0, 5, -10, 56]));

// Task 14

const task14 = [];
const task14Equal = [];

for (let i = 0; i < 10; i++) {
  const number = Math.floor(Math.random() * 11);
  task14.push(number);
  if (number % 2 === 0) {
    task14Equal.push(number);
  }
}

console.log(task14);
console.log(task14Equal);

// Task 15

const task15 = [];

for (let i = 0; i < 5; i++) {
  const number = Math.floor(Math.random() * 10 + 1);
  task15.push(number);
}

const sum = task15.reduce((acc, item) => acc + item, 0);
console.log(sum / task15.length);
