
// // Block and IIFE to create private scope.
// // es6
// {
//     const a = 1;
//     let b = 2;
// }

// // console.log(a+b);

// // es5
// (function() {
//     var c = 3;
// })();

// // console.log(c);

// // String in es6
// let firstName = 'Shock';
// let lastName = 'Liang';
// const yearOfBirth = '1987';

// function calculateAge(year) {
//     return new Date().getFullYear() - year;
// }

// // es5
// console.log('This is ' + firstName + ' ' + lastName +'. He was born in' + yearOfBirth + '. Today, he is ' + calculateAge(yearOfBirth) + ' years old');

// // es6
// console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calculateAge(yearOfBirth)} years old`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('S'));
// console.log(n.endsWith('g'));
// console.log(n.includes(' '));
// console.log(firstName.repeat(3));

// Arrow function
// const years = [1990, 1965, 1982, 1937];

// // es5
// var agesEs5 = years.map(function(el) {
//     return new Date().getFullYear() - el;
// });

// console.log(agesEs5);

// // es6
// let agesEs6 = years.map(el => new Date().getFullYear() - el );
// console.log(agesEs6);

// agesEs6 = years.map((el, index) => 
//     `Age element ${index + 1}: ${new Date().getFullYear() - el}`
// );
// console.log(agesEs6);

// agesEs6 = years.map((el, idx) => {
//     const year = new Date().getFullYear();
//     const age = year - el;
//     return `Age element ${idx + 1}: ${age}`;
// });

// Arrow function with 'this' keyword

// es5
// var boxEs5 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             console.log(this);
//             var str = 'This is box number ' + self.position + ' and it is ' + self.color;
//             alert(str);
//         });
//     }
// }

// //boxEs5.clickMe();

// // es6
// var boxEs6 = {
//     color: 'green',
//     position: 1,
//     clickMe: function() {
//         document.querySelector('.green').addEventListener('click', () => {
//             console.log(this);
//             var str = 'This is box number ' + this.position + ' and it is ' + this.color;
//             alert(str);
//         });
//     }
// }

// boxEs6.clickMe();

// function Person(name) {
//     this.name = name;
// }

// // es5
// Person.prototype.myFriends = function(friends) {
//     console.log(this);
//     // var self = this;
//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this));

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'Mark'];

// new Person('Shock').myFriends(friends);

// // es6
// Person.prototype.myFriendsEs6 = function(friends) {
//     console.log(this);
//     var arr = friends.map(el => `${this.name} is friends with  ${el}`);

//     console.log(arr);
// }

// new Person('Shock es6').myFriendsEs6(friends);

// Destructuring

// es5
// var john = ['John', 26];
// // var name = john[0];
// // var age = john[1];

// // es6
// const [name, year] = ['John', 26];
// console.log(name);
// console.log(year);

// const obj = {
//     firstName: 'Shock',
//     lastName: 'Liang'
// }

// const {firstName, lastName} = obj;

// console.log(firstName);
// console.log(lastName);

// const {firstName: a, lastName: b} = obj
// console.log(a);
// console.log(b);

// function calcAgeRetirement(year) {
//     const age = new Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1990);
// console.log(age2);
// console.log(retirement);


// Array

//const boxes = document.querySelectorAll('.box');

// es5
// var boxesArrayEs5 = Array.prototype.slice.call(boxes);
// boxesArrayEs5.forEach(function(current) {
//     current.style.backgroundColor = 'dodgerblue';
// });

// for(var i = 0; i< boxesArrayEs5.length; i++) {
//     if(boxesArrayEs5[i].className === 'boxblue') {
//         continue;
//     }
//     boxesArrayEs5[i].textContent = 'I changed to blue';
// }

// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(cur) {
//     return cur >= 18;
// });

// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // es6
// // Array.from(boxes).forEach(current => current.style.backgroundColor = 'dodgerblue');

// // var boxesEs6 = Array.from(boxes);
// // for(const current of boxesEs6) {
// //     if(current.className === 'box blue') {
// //         continue;
// //     }
// //     current.textContent = 'I changed to blue!';
// // }

// console.log(ages.findIndex(cur => cur >= 18));

// console.log(ages.find(cur => cur >= 18));

// Spread operator
// function addFourAges(a, b, c, d) {
//     return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// // es5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages);
// console.log(sum2);

// // es6
// const sum3 = addFourAges(...ages);
// console.log(sum3);

// const familySmith = ['John', 'Jane', 'Mark'];
// const familyMiller = ['Mary', 'Bob', 'Ann'];
// const bigFamily = [...familySmith, 'Lily', ...familyMiller];
// console.log(bigFamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];

// Array.from(all).forEach(cur => cur.style.color = 'purple');

// Rest parameters

// // es5
// function isFullAgesEs5(limit) {
//     console.log(arguments);
//     var args = Array.prototype.slice.call(arguments, 1);
//     console.log(args);
//     args.forEach(function(cur) {
//         console.log(cur);
//     });
// }

// // isFullAgesEs5(21, 1990, 1999, 1965);

// // es6
// function isFullAgesEs6(limit, ...years) {
//     console.log(years);
//     years.forEach(cur => console.log((new Date().getFullYear() - cur) > limit));
// }

// isFullAgesEs6(21, 1990, 1999, 1965);

// Default parameters
// es5
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//     lastName = lastName === undefined ? 'Smith' : lastName;
//     nationality = nationality === undefined ? 'Taiwan' : nationality;

//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// es6
// function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Taiwan'){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.yearOfBirth = yearOfBirth;
//     this.nationality = nationality;
// }

// var john = new SmithPerson('John', 1990);
// var emily = new SmithPerson('Emily', 1983, 'Diaz', 'Spanish');

// Maps

const question = new Map();
question.set('question', 'What is the official name of lateste major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong, please try again');

console.log(question.get('question'));
// console.log(question.size);

if(question.has(4)) {
    // question.delete(4);
}

// question.clear();

// question.forEach((value, key) => console.log(`${key}: ${value}`));

for(let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}:${value}`);
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));