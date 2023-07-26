//Task 1

let a = 10;
alert(a);

a = 20;
alert(a);

//Task 2

const iPhone = 2008;
alert(iPhone);

//Task 3

const jsAuthor = ":)";
alert("Автор JS: " + jsAuthor);

//Task 4

const first = 10;
const second = 2;

alert("Sum:" + (first + second));
alert("Dif:" + (first - second));
alert("Mult:" + first * second);
alert("Div:" + first / second);

//Task 5

const result = 2 ** 5;
alert("2 в 5 степени равняется: " + result);

//Task 6

const b = 9;
const c = 2;

alert("Остаток от деления 9 и 2: " + (b % c));

//Task 7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

//Task 8

const age = prompt("Сколько вам лет?");
alert(age);

//Task 9.0

const user = {
  name: "Andrew",
  age: 24,
  isAdmin: false,
};

//Task 9.1
user["city of residence"] = "Minsk";

//Task 9.2
user.age = 10;

//Task 9.3
delete user["city of residence"];

//Task 9.4

const info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//Task 10

const userName = prompt("Введите ваше имя");
alert(`Привет, ${userName}!`);
