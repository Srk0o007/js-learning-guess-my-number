// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//     console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`  );
//   },
  
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const {name, openingHours, categories} = restaurant;
// // console.log(name, openingHours, categories);

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// // console.log(restaurantName, hours, tags);

// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);


// //mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 23, b: 7, c: 14};
// ({a, b} = obj);

// console.log(a, b);

// //nested objects
// const {fri: {open: o, close: c}} = openingHours;
// console.log(o, c);






// restaurant.order(2, 0);
// console.log(restaurant.order(2, 0));


// // const arr  = [1, 2, 3];
// //  const a = arr[0];
// //  const b = arr[1];
// //  const c = arr[2];

// //  const [x, y, z] = arr;
// //  console.log(x, y, z);
// //  console.log(a, b, c);

//  const [first, second] = restaurant.categories;
//  console.log(first, second);
 
//  let [main, , secondary] = restaurant.categories;
//  console.log(main, secondary);

//  // Switching variables
//  // const temp = main;
//  // main = secondary;
//  // secondary = temp;
//  // console.log(main, secondary);

//  [main, secondary] = [secondary, main];
//  console.log(main, secondary);

//  // Receive 2 return values from a function
//  const [starter, mainCourse] = restaurant.order(2, 0);
//  console.log(starter, mainCourse);

//  const nested = [2, 4, [5, 6]];
//  const [i, , j] = nested;
//  console.log(i, j);

//  const [k, , [l, m]] = nested;
//  console.log(k, l, m);

//  // Default values
//  const [p = 1, q = 1, r = 1] = [8, 9];
//  console.log(p, q, r);



// const arr = [7, 8, 9];
// const badArr = [12, 13, 14];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu1);

// // Iterables: arrays, strings, maps, sets. NOT objects`
// const str = 'Jonas';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str} Schmedtmann`);

// // Real-world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt("Ingredient 2?"),
//   // prompt("Ingredient 3?"),
// ];


// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = {...restaurant, founder: 'Guiseppe'};
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);



// // Rest pattern and parameters
// // 1) Destructuring

// // SPREAD, because on RIGHT side of =
// const arr1 = [1, 2, ...[3, 4]];

// // REST, because on LEFT side of =
// const [a1, b1, ...others] = [1, 2, 3, 4, 5];
// console.log(a1, b1, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// const {sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };


// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x1 = [23, 5, 7];
// add(...x1);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');


// // Short Circuiting (&& and ||)
// console.log('---- OR ----');
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log('---- AND ----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'jonas');

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');   

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1);
// console.log(rest2);

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);   


//string

const airline = 'Tab Air India';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);


console.log (airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Air'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s=== 'B' || s === 'E') {
    console.log('You got the middle seat 😬');

  }
  else {
    console.log('You got lucky 😎');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const passenger = 'jOnaS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
console.log( passengerLower[0].toUpperCase(), passengerLower.slice(1));


const email = 'mbht@example.com';
const loginEmail = '  mBhT@example.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizeedEmail = loginEmail.toLowerCase().trim();
console.log(normalizeedEmail);

console.log(email === normalizeedEmail);

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));


//boolean and string methods
const plane2 = 'A320neo';
console.log(plane2.includes('A320'));
console.log(plane2.includes('Boeing'));
console.log(plane2.startsWith('Air'));

if (plane2.startsWith('A3') && plane2.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
}
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection'); 


//split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Mohd shahrukh'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  return namesUpper.join(' ');
}
console.log(capitalizeName('jessica ann smith davis'));
console.log(capitalizeName('jonas schmedtmann'));

//padding 

const message = 'Go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('Jonas'.padStart(25, '+'));
console.log('Jonas'.padEnd(25, '+'));
console.log('Jonas'.padEnd(25, '+').padStart(30, '+'));

const maskCreditCard = function (number) {
  const str = number + ''; // number.toString();
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(123456789)); //
console.log(maskCreditCard('123456789'));
console.log(maskCreditCard(1234567890));
console.log(maskCreditCard('1234567890'));
  

//repeat
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      
firstName          
someVariable        
calculateAge        
delayedDeparture    

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {

  const text = document.querySelector('textarea').value;
  rows = text.split('\n');
  // console.log(text);

  // console.log(rows);
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

