const rememberGame = () => {
  let words = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  words = words.sort(() => Math.random() - 0.5);

  alert(words);

  const firstElement = prompt("Введите первый фрукт");
  const lastElement = prompt("Введите последний фрукт");

  let score = 0;

  if (words[0].toLowerCase() === firstElement.toLowerCase()) {
    score++;
  }

  if (words[words.length - 1].toLowerCase() === lastElement.toLowerCase()) {
    score++;
  }

  if (score === 2) {
    alert("Вы выйграли, поздравляем!");
  } else if (score === 1) {
    alert("Вы были близки к победе!");
  } else {
    alert("Вы ответили неверно(");
  }
};
