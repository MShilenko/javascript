// "use strict";

// let string = "some test string";

// console.log(string[0]);
// console.log(string[string.length - 1]);

// console.log(
//   string[0].toUpperCase() +
//     string.slice(1, string.length - 1) +
//     string[string.length - 1].toUpperCase()
// );

// console.log(string.indexOf("string"));

// let firstSpace = string.indexOf(" ");
// console.log(string.indexOf(" ", firstSpace + 1));

// console.log(string.substr(5, 4));

// console.log(string.slice(5, 10));

// console.log(string.slice(0, -6));

// let a = 20;
// let b = 16;
// let string = `${a}${b}`;
// console.log(string);

// let store = {
//   product: 'iphone',
// };

// store.price = 100;
// store.currency = 'dollar';

// store.details = {
//   model: 'X',
//   color: 'black',
// };

// console.log(store);


// let product = {
//   name: 'Яблоко',
//   price: '10$'
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена

// let intPrice = parseInt(product.price);

// if (intPrice >= min && intPrice < max) {
//   console.log(product.name);
// } else {
//   console.log('товаров не найдено');
// }

// let string = 'i am in the easycode';
// let result = '';
// let i = 0;
// while (i < string.length) {
//   result += string[i - 1] == ' ' || i == 0 ? string[i].toUpperCase() : string[i];
//   i++;
// }


// let string = 'tseb eht ma i';
// let result = ''
// for (let i = 1; i < string.length + 1; i++) {
//   result += string[string.length - i];
// }


// let n = 5;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//   result *= i;
// }


// let string = 'JavaScript is a pretty good language';
// let result = '';
// for (let i = 0; i <= string.length; i++) {
//   if (string[i - 1] == ' ' || i == 0) {
//     result += string[i].toUpperCase();
//   } else if (string[i] != ' ') {
//     result += string[i];
//   }
// }


// let iterable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// let result = [];
// for (let value of iterable) {
//   if (value % 2) {
//     result.push(value);
//   }
// }


// let list = {
//   name: 'denis',
//   work: 'easycode',
//   age: 29
// }
// for (const key in list) {
//   if (list.hasOwnProperty(key)) {
//     list[key] = typeof list[key] == 'string' ? list[key].toUpperCase() : list[key];
//   }
// }

// function multiply() {
//   if (!arguments.length) {
//     return 0;
//   }

//   let result = 1;

//   for (let number of arguments) {
//     result *= number;
//   }

//   return result;
// }

// console.log(multiply(2, 4, 5, 6));
// console.log(multiply());

// function reverseString(str) {
//   let string = String(str);
//   let result = '';

//   for (let i = 1; i <= string.length; i++) {
//     result += string[string.length - i];
//   }

//   return result;
// }

// console.log(reverseString('test'));
// console.log(reverseString(''));
// console.log(reverseString(null));
// console.log(reverseString(undefined));
// console.log(reverseString());

// function getCodeStringFromText(str) {
//   let string = String(str);
//   let result = '';

//   for (let i = 0; i < string.length; i++) {
//     result += i + 1 == string.length ? `${string.charCodeAt(i)}` : `${string.charCodeAt(i)} `;
//   }

//   return result;
// }

// console.log(getCodeStringFromText("hello"));


// function guessTheNumber(num) {
//   if (num < 0 || num > 10) {
//     return new Error('Please provide number in range 0 - 10');
//   }

//   if (typeof num !== 'number') {
//     return new Error('Please provide a valid number');
//   }

//   let win = Math.round(Math.random() * 10);

//   return win === num ? 'You win!' : `You are lose, your number is ${num}, the random number is ${win}.`;
// }

// console.log(guessTheNumber(6));

// function getArray(num) {
//   let result = [];

//   for (let i = 1; i <= num; i++) {
//     result.push(i);
//   }

//   return result;
// }

// console.log(getArray(10));

// function doubleArray(arr) {
//   return arr.concat(arr);
// }

// console.log(doubleArray([1, 2, 3]));  // [1,2,3,1,2,3]

// function changeCollection() {
//   if (!arguments.length) {
//     return 'Не заданы аргументы';
//   }

//   let result = [];

//   for (let array of arguments) {
//     result.push(array.slice(1, array.length));
//   }

//   return result;
// }

// console.log(changeCollection([1, 2, 3], ['a', 'b', 'c']));

// const users = [
//   {
//     "_id": "5e36b779dc76fe3db02adc32",
//     "balance": "$1,955.65",
//     "picture": "http://placehold.it/32x32",
//     "age": 33,
//     "name": "Berg Zimmerman",
//     "gender": "male"
//   },
//   {
//     "_id": "5e36b779d117774176f90e0b",
//     "balance": "$3,776.14",
//     "picture": "http://placehold.it/32x32",
//     "age": 37,
//     "name": "Deann Winters",
//     "gender": "female"
//   },
//   {
//     "_id": "5e36b779daf6e455ec54cf45",
//     "balance": "$3,424.84",
//     "picture": "http://placehold.it/32x32",
//     "age": 36,
//     "name": "Kari Waters",
//     "gender": "female"
//   }
// ]


// function filterUsers(arr, key, value) {
//   if (!arr.length) {
//     return new Error('Array not passed.');
//   }

//   for (let obj of arr) {
//     if (obj[key] === value) {
//       return [obj];
//     }
//   }

//   return new Error('Object with such data was not found');
// }

// console.log(filterUsers(users, "age", 36));


// function firstFunc(arr, fn) {
//   let separators = {
//     handler1: '',
//     handler2: ', ',
//     handler3: ', ',
//     handler4: ', ',
//   };
//   let result = [];

//   for (let el of arr) {
//     result.push(fn(el));
//   }

//   return `New value: ${result.join(separators[fn.name])}`;
// }

// function handler1(el) {
//   return el[0].toUpperCase() + el.slice(1);
// }

// console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));

// function handler2(el) {
//   return el * 10;
// }

// console.log(firstFunc([10, 20, 30], handler2))

// function handler3(el) {
//   return `${el.name} is ${el.age}`;
// }

// console.log(firstFunc([{ age: 45, name: 'Jhon' }, { age: 20, name: 'Aaron' }], handler3));

// function handler4(el) {
//   let result = '';

//   for (let i = 1; i <= el.length; i++) {
//     result += el[el.length - i];
//   }

//   return result;
// }

// console.log(firstFunc(['abs', '123'], handler4));

// function every(arr, fn) {
//   if (!Array.isArray(arr)) {
//     return new Error('Not an array passed.');
//   }

//   if (!fn || typeof fn !== 'function') {
//     return new Error('No function passed.');
//   }

//   for (let [index, el] of arr.entries()) {
//     if (!fn(el, index, arr)) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(every([1, 2, 3, 4, 5, 6], function (el) {
//   console.log(el);
//   return el < 4;
// }));

// console.log(every([1, 2, 3, 4, 5, 6], function (el) {
//   console.log(el);
//   return el % 2;
// }));

// const rectangle = {
//   width: 10,
//   height: 15,
//   getSquare() {
//     return this.width * this.height
//   },
// };

// console.log(rectangle.getSquare());

// const price = {
//   price: 10,
//   discount: '15%',
//   getPrice() {
//     return this.price;
//   },
//   getPriceWithDiscount() {
//     let discount = parseFloat(this.discount);

//     return this.price - (this.price * (discount / 100));
//   },
// };

// console.log(price.getPrice());
// console.log(price.getPriceWithDiscount());

// let object = {
//   height: 0,
//   heightIncrement() {
//     return this.height++;
//   }
// };

// object.height = 10;
// object.heightIncrement();
// console.log(object.height);

// const numerator = {
//   value: 1,
//   double: function () {
//     this.value = this.value * 2;
//     return this;
//   },
//   plusOne: function () {
//     this.value++;
//     return this;
//   },
//   minusOne: function () {
//     this.value--;
//     return this;
//   },
// }

// numerator.double().plusOne().plusOne().minusOne();
// console.log(numerator.value);

// let products = {
//   price: 50,
//   count: 20,
//   getTotal() {
//     return this.price * this.count;
//   }
// }

// let details = {
//   price: 150,
//   count: 30,
// }

// details.getTotal = products.getTotal;
// console.log(details.getTotal());

// let sizes = {
//   width: 5,
//   height: 10
// };

// getSquare = function () {
//   return this.width * this.height;
// };

// console.log(getSquare.call(sizes));

// let element = {
//   height: 25,
//   getHeight: function () {
//     return this.height;
//   }
// };

// let getElementHeight = element.getHeight.bind(element);
// console.log(getElementHeight()); 

// function sum() {
//   const params = Array.prototype.slice.call(arguments);
//   if (!params.length) return 0;
//   return params.reduce((prev, next) => prev + next);
// }

// let sum = (...args) => {
//   const params = Array.prototype.slice.call(args);
//   if (!params.length) return 0;
//   return params.reduce((prev, next) => prev + next);
// }

// console.log(sum(1, 2, 3, 4));
// console.log(sum());

// const convertToObject = (num) => ({
//   value: num,
//   isOdd: Boolean(num % 2)
// });

// console.log(convertToObject(10));

// let arr = [1, 2, 3, 5, 8, 9, 10];
// let newArr = arr.map(num => ({
//   digit: num,
//   odd: Boolean(num % 2),
// }));

// console.log(newArr);

// let arr = [12, 4, 50, 1, 0, 18, 40];
// let hasZero = arr.some(num => !num);
// console.log(hasZero);

// let arr = ['yes', 'hello', 'no', 'easycode', 'what'];
// let hasThreeLetters = arr.every(word => word.length > 2);
// console.log(hasThreeLetters);

// let arr = [
//   { char: "a", index: 12 },
//   { char: "w", index: 8 },
//   { char: "Y", index: 10 },
//   { char: "p", index: 3 },
//   { char: "p", index: 2 },
//   { char: "N", index: 6 },
//   { char: " ", index: 5 },
//   { char: "y", index: 4 },
//   { char: "r", index: 13 },
//   { char: "H", index: 0 },
//   { char: "e", index: 11 },
//   { char: "a", index: 1 },
//   { char: " ", index: 9 },
//   { char: "!", index: 14 },
//   { char: "e", index: 7 }
// ];

// let sortOnIndex = arr => {
//   let sortedArr = arr.sort((prev, next) => prev.index - next.index);
//   let string = sortedArr.reduce((acc, obj) => acc += obj.char, '');

//   return string;
// };

// console.log(sortOnIndex(arr));

// let arr = [
//   [14, 45],
//   [1],
//   ['a', 'c', 'd']
// ];

// console.log(arr.sort((prev, next) => prev.length - next.length));

// let arr = [

//   { cpu: 'intel', info: { cores: 2, сache: 3 } },

//   { cpu: 'intel', info: { cores: 4, сache: 4 } },

//   { cpu: 'amd', info: { cores: 1, сache: 1 } },

//   { cpu: 'intel', info: { cores: 3, сache: 2 } },

//   { cpu: 'amd', info: { cores: 4, сache: 2 } }

// ];

// console.log(arr.sort((prev, next) => prev.info.cores - next.info.cores));

// let products = [

//   { title: 'prod1', price: 5.2 }, { title: 'prod2', price: 0.18 },

//   { title: 'prod3', price: 15 }, { title: 'prod4', price: 25 },

//   { title: 'prod5', price: 18.9 }, { title: 'prod6', price: 8 },

//   { title: 'prod7', price: 19 }, { title: 'prod8', price: 63 }

// ];

// let filterAndSortProducts = (products, minPrice, maxPrice) => {
//   let rangeArr = products.filter(product => product.price >= minPrice && product.price <= maxPrice);
//   let sortedArr = rangeArr.sort((prev, next) => prev.price - next.price);

//   return sortedArr;
// };

// console.log(filterAndSortProducts(products, 2, 50));

// function minus(num = 0) {
//   return (num2 = 0) => num - num2;
// }

// console.log(minus(10)(6)); // 4
// console.log(minus(5)(6)); // -1
// console.log(minus(10)()); // 10
// console.log(minus()(6)); // -6
// console.log(minus()()); // 0

// function multiplyMaker(num = 1) {
//   return (num2 = 1) => num *= num2;
// }

// const multiply = multiplyMaker(2);
// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)

// function stringModule() {
//   let str = '';

//   return {
//     setString: (value = '') => { str = String(value) },
//     getString: () => str,
//     getStringLength: () => str.length,
//     getReverseString: () => {
//       let result = '';

//       for (let i = 1; i <= str.length; i++) {
//         result += str[str.length - i];
//       }

//       return result;
//     },
//   };
// };

// let module = stringModule();
// module.setString('Test string');
// console.log(module.getString());
// console.log(module.getStringLength());
// console.log(module.getReverseString());

// Пример замыкания + немедленный принудительный вызво функции. Это позволяет использовать методы передаваемые в анонимном объекте по цепочке.
// let calculator = (function () {
//   let result = 0;

//   function setValue(value = 0) {
//     result = Number(value);
//     return this;
//   }

//   function plus(num = 0) {
//     result += num;
//     return this;
//   }

//   function minus(num = 0) {
//     result -= num;
//     return this;
//   }

//   function multiplication(num = 1) {
//     result *= num;
//     return this;
//   }

//   function division(num = 1) {
//     result /= num;
//     return this;
//   }

//   function exponentiation(num = 1) {
//     result = Math.pow(result, num);
//     return this;
//   }

//   function getResult() {
//     return result.toFixed(2);
//   }

//   return {
//     setValue,
//     plus,
//     minus,
//     multiplication,
//     division,
//     exponentiation,
//     getResult,
//   };
// }());

// console.log(calculator.setValue(15).plus(3).minus(6).multiplication(4).division(2).exponentiation().getResult());


// function func(firstArg, ...otherArgs) {
//   return {
//     first: firstArg,
//     other: otherArgs,
//   };
// }

// console.log(func('a', 'b', 'c', 'd'));

// function getInfo({ name = 'Unknown', info: { partners: [first = '', second = ''] } } = {}) {
//   return `Name: ${name} \nPartners: ${first} ${second}`;
// }

// const organisation = {
//   name: 'Google',
//   info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] }
// };

// console.log(getInfo(organisation));

// let user = {

//   "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",

//   "isActive": false,

//   "balance": "$2,474.46",

//   "age": 30,

//   "eyeColor": "blue",

//   "name": "Tameka Maxwell",

//   "gender": "female",

//   "company": "ENOMEN",

//   "email": "tamekamaxwell@enomen.com",

//   "phone": "+1 (902) 557-3898",

//   "tags": [

//     "aliquip",

//     "anim",

//     "exercitation",

//     "non",

//   ],

//   "friends": [

//     {

//       "id": 0,

//       "name": "Barber Hicks"

//     },

//     {

//       "id": 1,

//       "name": "Santana Cruz"

//     },

//     {

//       "id": 2,

//       "name": "Leola Cabrera"

//     }

//   ],

// };

// let {
//   name = '',
//   balance = '',
//   email = '',
//   tags: [
//     first = '',
//     ,
//     ,
//     last = ''
//   ],
//   friends: [
//     { name: friendName } = {},
//     { ...friendsOthers } = {}
//   ]
// } = user;

// console.log(name, balance, email, first, last, friendName);

// let array = [...user.tags, ...user.friends];
// console.log(array);

// Легкий спопособ получить в ввиде масива дочерние элементы узла
// let [...childs] = document.querySelector('div').children;
// console.log(childs.slice(1, -1));

// function isParent(parent, child) {
//   if (!(parent instanceof HTMLElement) || !(child instanceof HTMLElement)) {
//     return;
//   }

//   return parent.contains(child);
// }

// console.log(isParent(document.body.children[0], document.querySelector('mark')));
// console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

// let links = [...document.links];
// console.log(links.filter(a => !a.closest('ul')));

// let ul = document.querySelector('ul');
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);



// function getInfo(el) {
//   if (!el instanceof Element) {
//     return;
//   }

//   return {
//     type: el.nodeType,
//     name: el.tagName,
//     childsCount: el.children.length,
//   }
// }

// console.log(getInfo(document.querySelector('ul')));

// function getTextFromUl(ul) {
//   if (!ul instanceof Element && ul.tagName !== 'UL') {
//     return;
//   }

//   let result = [];
//   [...ul.children].forEach(li => {
//     if (li.querySelector('a')) {
//       result.push(li.querySelector('a').textContent);
//     }
//   });

//   return result;
// }

// console.log(getTextFromUl(document.querySelector('ul')));

// const TEXT_NODE = 3;
// const [...childs] = document.querySelector('p').childNodes;
// childs.forEach(child => {
//   if (child.nodeType === TEXT_NODE) {
//     child.textContent = '-text-';
//   }
// });

// document.querySelector('ul').classList.add('list');
// document.querySelector('ul ~ a').id = 'link';

// let ul = document.querySelector('ul');

// [...ul.children].forEach((li, index) => {
//   if (li.tagName === 'LI' && !(index % 2)) {
//     li.classList.add('item');
//   }
// });

// [...document.links].forEach(a => a.classList.add('custom-link')); 

// let ul = document.querySelector('ul');

// function addLi(ul, count) {
//   if (ul instanceof Element && count instanceof Number) {
//     return;
//   }

//   let fragment = document.createDocumentFragment();
//   for (let i = 1; i <= count; i++) {
//     let item = document.createElement('li');
//     item.classList.add('new-item');
//     item.textContent = `item ${ul.children.length + i}`;
//     fragment.appendChild(item);
//   }

//   ul.appendChild(fragment);
// }

// console.log(addLi(ul, 3));

// let ul = document.querySelector('ul');

// [...ul.children].forEach(li => {
//   if (li.querySelector('a')) {
//     let strong = document.createElement('strong');
//     li.querySelector('a').appendChild(strong);
//   }
// });

// let img = document.createElement('img');
// img.src = 'test.jpg';
// img.alt = 'test';

// document.body.insertAdjacentElement('afterbegin', img);

// let mark = document.querySelector('mark');
// mark.insertAdjacentText('beforeend', 'green');
// mark.classList.add('green');

// let ul = document.querySelector('ul');
// let sortChilds = [...ul.children].sort((prev, next) => prev.textContent > next.textContent ? -1 : 1);
// ul.innerHTML = '';
// sortChilds.forEach(li => ul.appendChild(li));

// let btn = document.getElementById('btn-msg');
// btn.addEventListener('click', (e) => alert(e.target.dataset.text));

// let btn = document.getElementById('btn-msg');
// btn.addEventListener('mouseover', (e) => e.target.classList.add('active'));
// btn.addEventListener('mouseout', (e) => e.target.classList.remove('active'));

// let tag = document.getElementById('tag');
// document.body.addEventListener('click', (e) => tag.textContent = e.target.tagName);

// let btn = document.getElementById('btn-generate');
// let ul = document.querySelector('ul');

// function addListItem() {
//   let li = document.createElement('li');
//   li.textContent = `item ${ul.children.length + 1}`;
//   ul.appendChild(li);
// }

// btn.addEventListener('click', addListItem);

// let triggers = menu.querySelectorAll('.dropdown-item');

// triggers.forEach(el => el.addEventListener('click', toggleMenu));

// function toggleMenu(e) {
//   triggers.forEach(el => {
//     if (el === e.currentTarget) {
//       el.querySelector('.dropdown-menu').classList.toggle('d-none');
//     } else {
//       el.querySelector('.dropdown-menu').classList.add('d-none');
//     }
//   });
// }

// let colors = ['red', 'blue', 'olive', 'orange', 'pink', 'yellow', 'green', 'gray', 'aqua', 'brown'];
// let boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   box.addEventListener('mouseover', boxMOver);
//   box.addEventListener('mouseout', boxMOut);
// });

// function boxMOver(e) {
//   e.stopPropagation();
//   let childs = e.currentTarget.querySelectorAll('.box');
//   let delay = 200;
//   childs.forEach((el, index) => {
//     setTimeout(() => el.style['background-color'] = colors[index], delay * (index + 1));
//   });
// }

// function boxMOut(e) {
//   e.stopPropagation();
//   let childs = e.currentTarget.querySelectorAll('.box');
//   childs.forEach(el => el.style['background-color'] = '');
// }


// const users = [
//   {
//     "_id": "5d220b10e8265cc978e2586b",
//     "isActive": true,
//     "balance": 2853.33,
//     "age": 20,
//     "name": "Buckner Osborne",
//     "gender": "male",
//     "company": "EMPIRICA",
//     "email": "bucknerosborne@empirica.com",
//     "phone": "+1 (850) 411-2997",
//     "registered": "2018-08-13T04:28:45 -03:00",
//     "nestedField": { total: 300 }
//   },
//   {
//     "_id": "5d220b10144ef972f6c2b332",
//     "isActive": true,
//     "balance": 1464.63,
//     "age": 38,
//     "name": "Rosalie Smith",
//     "gender": "female",
//     "company": "KATAKANA",
//     "email": "rosaliesmith@katakana.com",
//     "phone": "+1 (943) 463-2496",
//     "registered": "2016-12-09T05:15:34 -02:00",
//     "nestedField": { total: 400 }
//   },
//   {
//     "_id": "5d220b1083a0494655cdecf6",
//     "isActive": false,
//     "balance": 2823.39,
//     "age": 40,
//     "name": "Estrada Davenport",
//     "gender": "male",
//     "company": "EBIDCO",
//     "email": "estradadavenport@ebidco.com",
//     "phone": "+1 (890) 461-2088",
//     "registered": "2016-03-04T03:36:38 -02:00",
//     "nestedField": { total: 200 }
//   }
// ];

// (function (arrOfUsers) {
//   const block = document.getElementById('table');
//   const tableHeaders = {
//     id: '#',
//     name: 'Имя',
//     email: 'E-mail',
//     balance: 'Баланс',
//   };
//   const table = createTable();

//   block.appendChild(table);

//   /**
//    * Создаем и выводим таблицу
//    * @return {HTMLElement} table
//    */
//   function createTable() {
//     const table = document.createElement('table');
//     table.setAttribute('border', 1);
//     const headers = addHeaders();
//     const lines = addLines();
//     const total = addTotalLine();

//     table.appendChild(headers);
//     table.appendChild(lines);
//     table.appendChild(total);

//     console.log(table);

//     return table;
//   }

//   /**
//    * Доблаяем строку заголовков
//    * @return {HTMLElement} tr
//    */
//   function addHeaders() {
//     const tr = document.createElement('tr');
//     Object.values(tableHeaders).forEach(header => {
//       const th = addCell(header, 'th');
//       tr.appendChild(th);
//     });

//     return tr;
//   }

//   /**
//    * Создаем фрагмент и наполяем его строками таблицы
//    * @return {DocumentFragment} fragment
//    */
//   function addLines() {
//     const fragment = document.createDocumentFragment();
//     arrOfUsers.forEach(user => fragment.appendChild(addLine(user)));

//     return fragment;
//   }

//   /**
//    * Создаем строку таблицы и наполняем данными
//    * @param {Object}
//    * @return {HTMLElement} tr
//    */
//   function addLine({ _id, name, email, nestedField: { total } }) {
//     const user = [_id, name, email, total];
//     const tr = document.createElement('tr');
//     user.forEach(content => tr.appendChild(addCell(content)));

//     return tr;
//   }

//   /**
//    * Добавляем строку Итого
//    * @return {HTMLElement} tr
//    */
//   function addTotalLine() {
//     const tr = document.createElement('tr');
//     const td = document.createElement('td');
//     td.setAttribute('colspan', Object.keys(tableHeaders).length);
//     td.setAttribute('align', 'right');
//     td.textContent = `Итого: ${users.reduce((acc, user) => acc + user.nestedField.total, 0)}`;
//     tr.appendChild(td);

//     return tr;
//   }

//   /**
//    * Создаем одну ячейку таблицы
//    * @param {String} content 
//    * @param {String} tag 
//    * @return {HTMLElement} cell
//    */
//   function addCell(content, tag = 'td') {
//     const cell = document.createElement(tag);
//     cell.textContent = content;

//     return cell;
//   }
// })(users);

// ! AJAX GET
// const btn = document.querySelector('.btn-get-post');
// btn.addEventListener('click', e => {
//   getPosts(
//     (response) => {
//       response.forEach(post => {
//         console.log(user);
//       });
//     }
//   );
// });

// function getPosts(cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
//   xhr.addEventListener('load', () => {
//     const response = JSON.parse(xhr.responseText);
//     cb(response);
//   });

//   xhr.addEventListener('error', () => {
//     console.log('error');
//   });

//   xhr.send();
// }


// ! AJAX POST
// const btnAddPost = document.querySelector('.btn-add-post');
// btnAddPost.addEventListener('click', e => {
//   const newPost = {
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   };
//   createPosts(newPost, (response) => console.log(response));
// });

// function createPosts(body, cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
//   xhr.addEventListener('load', () => {
//     const response = JSON.parse(xhr.responseText);
//     cb(response);
//   });

//   xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');

//   xhr.addEventListener('error', () => {
//     console.log('error');
//   });

//   xhr.send(JSON.stringify(body));
// }

// ! GET и POST по простому на AJAX все вместе
// const btnGetUsers = document.querySelector('.btn-get-users');
// const addUserForm = document.forms.addUser;
// const myHttp = http();
// let usersBlock = document.getElementById('users');
// btnGetUsers.addEventListener('click', e => {
//   getUsers((error, response) => {
//     if (error) {
//       alert(error);
//       return;
//     }
//     displayUsers(response);
//   });
// });
// addUserForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const request = setRequest();
//   if (request) {
//     createUser(request, (error, response) => {
//       if (error) {
//         alert(error);
//         return;
//       }
//       const newUserBlock = setUserBlock(response);
//       usersBlock.insertAdjacentElement('afterbegin', newUserBlock);
//     });
//   }
// });
// usersBlock.addEventListener('click', (e) => showMore(e));

// /**
//  * POST и GET запросы
//  */
// function http() {
//   return {
//     get(url, cb) {
//       try {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.addEventListener('load', () => {
//           // Не 200-ые заголовки в ответе
//           if (Math.floor(xhr.status / 100) !== 2) {
//             cb(`Error: ${xhr.status}`, xhr);
//             return;
//           }

//           const response = JSON.parse(xhr.responseText);
//           cb(null, response);
//         });

//         xhr.addEventListener('error', () => {
//           cb(`Error: ${xhr.status}`, xhr);
//         });

//         xhr.send();
//       } catch (error) {
//         cb(error);
//       }
//     },
//     post(url, body, cb, headers) {
//       try {
//         const xhr = new XMLHttpRequest();
//         xhr.open('POST', url);
//         xhr.addEventListener('load', () => {
//           // Не 200-ые заголовки в ответе
//           if (Math.floor(xhr.status / 100) !== 2) {
//             cb(`Error: ${xhr.status}`, xhr);
//             return;
//           }

//           const response = JSON.parse(xhr.responseText);
//           cb(null, response);
//         });

//         xhr.addEventListener('error', () => {
//           cb(`Error: ${xhr.status}`, xhr);
//         });

//         if (headers) {
//           Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
//         }

//         xhr.send(JSON.stringify(body));
//       } catch (error) {
//         cb(error);
//       }
//     },
//   };
// }

// /**
//  * Отправляем запрос и получаем объект пользователей
//  * @param {Object} cb 
//  */
// function getUsers(cb) {
//   myHttp.get('https://jsonplaceholder.typicode.com/users', cb);
// }

// /**
//  * Отправляем запрос и получаем объект нового пользователя
//  * @param {Object} body 
//  * @param {Function} cb 
//  */
// function createUser(body, cb) {
//   myHttp.post(
//     'https://jsonplaceholder.typicode.com/users',
//     body,
//     cb,
//     { 'Content-type': 'application/json; charset=UTF-8' },
//   );
// }

// /**
//  * Создаем тело запроса на добавление нового пользователя
//  * @return {Object}
//  */
// function setRequest() {
//   let validateForm = validate(addUserForm);

//   if (validateForm.error) {
//     alert(validateForm.error);
//     return false;
//   }

//   return {
//     name: addUserForm.name.value,
//     email: addUserForm.email.value,
//     phone: addUserForm.phone.value,
//     website: addUserForm.website.value,
//   }
// }

// /**
//  * Простая валидация формы
//  * @param {object} form 
//  * @return {object}
//  */
// function validate(form) {
//   let error = '';
//   [...form.elements].forEach(element => {
//     if (!element.value && element.type !== 'submit') {
//       error += `Field ${element.name} is required! \n`;
//     }
//   });

//   return {
//     error: error
//   };
// }

// /**
//  * Выводим информацию о пользователях на страницу
//  * @param {Object} users 
//  */
// function displayUsers(users) {
//   if (!users) {
//     throw new Error('Не переданы данные о пользователях!');
//   }

//   let fragment = document.createDocumentFragment();
//   users.forEach(user => {
//     const userBlock = setUserBlock(user);
//     fragment.appendChild(userBlock);
//   });

//   usersBlock.appendChild(fragment);
// }

// /**
//    * Создаем и наполняем данными карточку пользователя
//    * @param {Object} user 
//    * @return {Object} cardBlock 
//    */
// function setUserBlock(user) {
//   const block = createBlock(['col-sm-6']);

//   const cardBlock = createBlock(['card', 'mt-2']);
//   block.appendChild(cardBlock);

//   const cardBodyBlock = createBlock(['card-body']);
//   cardBlock.appendChild(cardBodyBlock);

//   const titleBlock = createBlock(['card-title'], 'h5');
//   titleBlock.innerHTML = `${user.name} | <a href="#" class="more">Подробнее</a>`;
//   cardBodyBlock.appendChild(titleBlock);

//   const infoBlock = createBlock(['info', 'd-none']);
//   let info = setInfo(user);
//   infoBlock.appendChild(info);

//   cardBodyBlock.appendChild(infoBlock);

//   return block;
// }

// /**
//  * Функция для создания типовых блоков
//  * @param {Array} classes 
//  * @param {String} tag 
//  * @return {Object} block
//  */
// function createBlock(classes = [], tag = 'div') {
//   let block = document.createElement(tag);
//   if (classes && typeof Array.isArray(classes)) {
//     classes.forEach(currentClass => block.classList.add(currentClass));
//   }

//   return block;
// }

// /**
//  * Создаем параграфы и наполняем их дынными
//  * @param {Object} user 
//  * @return {Object} fragment 
//  */
// function setInfo(user) {
//   const fragment = document.createDocumentFragment();

//   Object.keys(user).forEach(key => {
//     let info = addParagraph(key, user[key])
//     fragment.appendChild(info);
//   });

//   return fragment;
// }

// /**
//  * Создаем и наполняем параграф
//  * @param {String} key 
//  * @param {String} value 
//  * @param {String} parentKey 
//  * @return {String} fragment
//  */
// function addParagraph(key, value, parentKey = '') {
//   const fragment = document.createDocumentFragment();

//   if (typeof value === 'object') {
//     Object.keys(value).forEach(innerKey => {
//       const p = addParagraph(innerKey, value[innerKey], key);
//       fragment.appendChild(p);
//     });

//     return fragment;
//   }

//   const item = createBlock(['card-text', 'p']);
//   item.innerHTML = `<span class="font-weight-bold">${parentKey ? parentKey + '.' + key : key}:</span> ${value}`;

//   fragment.appendChild(item);

//   return fragment;
// }

// /**
//  * Выводим на страницу всю информацию
//  * @param {*} e 
//  */
// function showMore(e) {
//   if (e.target.classList.contains('more')) {
//     const userCard = e.target.closest('.card');
//     const cardInfo = userCard.querySelector('.info');

//     cardInfo.classList.toggle('d-none');
//   }
// }

// ! ООП

// * ES5
// function Product(brand, price, discount) {
//   // Свойства
//   this.brand = brand;
//   this.price = price;
//   this.discount = discount;

//   this.getPriceWithDiscount = () => this.price * (100 - this.discount) / 100; // Метод
// }

// // Вынос метода в прототип(вроде бы не работает с короткими(=>) записями функции)
// Product.prototype.getPrice = function() {
//   return this.price;
// }

// const apple = new Product('apple', 100, 15); // получаем объект
// const samsung = new Product('samsung', 70, 25);
// console.log(apple, apple.getPriceWithDiscount());
// console.log(samsung, samsung.getPrice());

// // Наследование
// function ChildrenProduct(brand, price, discount) {
//   Product.apply(this, arguments);
// }

// // Унаследобвать все методы прототипа
// ChildrenProduct.prototype = Object.create(Product.prototype);
// ChildrenProduct.prototype.constructor = ChildrenProduct;

// const iphone = new ChildrenProduct('iphone', 1000, 1);
// console.log(iphone.getPriceWithDiscount(), iphone.getPrice());

// * ES6

// class Product {
//   constructor(brand, price, discount) {
//     this._brand = brand;
//     this.price = price;
//     this.discount = discount;
//   }

//   get brand() {
//     return this._brand;
//   }

//   set brand(name) {
//     this._brand = name;
//   }

//   getPriceWithDiscount() {
//     return this.price * (100 - this.discount) / 100;
//   } 

//   static getDescription() {
//     return 'Статический метод класса';
//   }
// }

// class ChildrenProduct extends Product {
//   constructor(brand, price, discount) {
//     super(brand, price, discount);
//   }
// }

// const apple = new Product('apple', 100, 15);
// console.log(apple, apple.getPriceWithDiscount());
// console.log(Product.getDescription());
// console.log(apple.brand);

// const iphone = new ChildrenProduct('iphone', 1000, 1);
// console.log(iphone.getPriceWithDiscount());

