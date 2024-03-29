// 1. Запиши умову в інструкції if таким чином, щоб функція працювала правильно.
// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
// Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"
// В тілі функції є тільки одна інструкція if
// В тілі функції відсутні інструкції else або else if

function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return 'You are an adult';
  }

  return 'You are a minor';
}

// 2.Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.
// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:
// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';

  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }
  return 'Access denied, wrong password!';
}

// 3.Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty!';
  }

  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }

  return 'The order is accepted, our manager will contact you';
}

// 4.Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// 5.Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

// Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву

const fruits = ['apple', 'plum', 'pear', 'orange'];
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];

// 6.Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

const fruits = ['apple', 'plum', 'pear', 'orange'];
fruits[1] = 'peach';
fruits[3] = 'banana';

// 7.Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

const fruits = ['apple', 'peach', 'pear', 'banana'];
const fruitsArrayLength = fruits.length;

// 8. Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву

const fruits = ['apple', 'peach', 'pear', 'banana'];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// 9.Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
}

// 10.Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

function splitMessage(message, delimiter) {
  let words = message.split(delimiter);
  return words;
}

// 11.Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  const numberOfWords = words.length;
  const totalPrice = pricePerWord * numberOfWords;
  return totalPrice;
}

// 12.Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

function makeStringFromArray(array, delimiter) {
  let string = array.join(delimiter);
  return string;
}

// 13.Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.
// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

// 14.Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.
// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 4);
const lastThreeEls = fruits.slice(2);

// 15.Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

const newClients = ['Peach', 'Houston'];
const allClients = oldClients.concat(newClients);

// 16.Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.
// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

function makeArray(firstArray, secondArray, maxLength) {
  let arr = firstArray.concat(secondArray);

  let newArr;
  if (arr.length >= maxLength) {
    newArr = arr.slice(0, maxLength);
  } else {
    newArr = arr;
  }
  return newArr;
}

//or

function makeArray(firstArray, secondArray, maxLength) {
  let arr = firstArray.concat(secondArray);
  return arr.length >= maxLength ? arr.slice(0, maxLength) : arr;
}

// 17.Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) {
  // Change this line
  console.log(i);
}

// 18.Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

function calculateTotal(number) {
  let result = 0;
  for (let i = 0; i <= number; i += 1) {
    result += i;
  }
  return result;
}
// Або ж можна використовувати формулу для обчислення суми арифметичної прогресії:

function calculateTotalSecond(number) {
  return (number * (number + 1)) / 2;
}

// 19.Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];
  console.log(fruit);
}

// 20.Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}

// 21.Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
  let words = string.split(' ');

  let longestWord = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

// 22.Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }
  return numbers;
}

// 23.Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

function filterArray(numbers, value) {
  let result = [];
  for (let i = 0; i <= numbers.length; i++) {
    if (numbers[i] > value) {
      result.push(numbers[i]);
    }
  }
  return result;
}

// 24.Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  return fruits.includes(fruit);
}

// 25.Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

function getCommonElements(array1, array2) {
  const commonElements = [];

  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      commonElements.push(array1[i]);
    }
  }

  return commonElements;
}

// 26.Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

function calculateTotalPrice(order) {
  let total = 0;
  for (const variable of order) {
    total += variable;
  }
  return total;
}

// 27.Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

function filterArray(numbers, value) {
  const filteredNumbers = [];
  for (const num of numbers) {
    if (num > value) {
      filteredNumbers.push(num);
    }
  }
  return filteredNumbers;
}

// 28.Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

const a = 3 % 3; // 3 % 3 = 0
const b = 4 % 3; // 4 % 3 = 1
const c = 11 % 8; // 11 % 8 = 3
const d = 12 % 7; // 12 % 7 = 5
const e = 8 % 3; // 8 % 3 = 2

// 29.Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

function getEvenNumbers(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
}

//or better

function getEvenNumbers(start, end) {
  let result = [];
  if (start % 2 !== 0) {
    start++;
  }
  for (let i = start; i <= end; i += 2) {
    result.push(i);
  }
  return result;
}

// 30.Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// 31Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

function findNumber(start, end, divisor) {
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

// 32.Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

function includes(array, value) {
  for (let item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}
