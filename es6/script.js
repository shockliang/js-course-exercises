
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
const years = [1990, 1965, 1982, 1937];

// es5
var agesEs5 = years.map(function(el) {
    return new Date().getFullYear() - el;
});

console.log(agesEs5);

// es6
let agesEs6 = years.map(el => new Date().getFullYear() - el );
console.log(agesEs6);

agesEs6 = years.map((el, index) => 
    `Age element ${index + 1}: ${new Date().getFullYear() - el}`
);
console.log(agesEs6);

agesEs6 = years.map((el, idx) => {
    const year = new Date().getFullYear();
    const age = year - el;
    return `Age element ${idx + 1}: ${age}`;
});

