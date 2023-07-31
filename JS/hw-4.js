// Task 1

let hello = 1;

while (hello <= 2) {
  console.log("Привет!");
  hello++;
}

// Task 2

let number = 1;

do {
  console.log(number);
  number++;
} while (number <= 5);

// Task 3

for (let i = 7; i <= 22; i++) {
  console.log(i);
}

// Task 4

const obj = {
  Коля: 200,
  Петя: 300,
  Вася: 400,
};

for (let name in obj) {
  console.log(`${name} - зарплата ${obj[name]} долларов`);
}

// Task 5

let num = 0;

for (let n = 1000; ; n = n / 2) {
  if (n <= 50) {
    console.log(n);
    console.log(num);
    break;
  } else {
    num++;
  }
}

// Task 6

for (let i = 5; i <= 31; i = i + 7) {
  console.log(`Сегодня пятница, ${i}-число. Необходимо подготовить отчет.`);
}
