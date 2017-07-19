
// Block and IIFE to create private scope.
// es6
{
    const a = 1;
    let b = 2;
}

// console.log(a+b);

// es5
(function() {
    var c = 3;
})();

// console.log(c);

// String in es6
let firstName = 'Shock';
let lastName = 'Liang';
const yearOfBirth = '1987';

function calculateAge(year) {
    return new Date().getFullYear() - year;
}

// es5
console.log('This is ' + firstName + ' ' + lastName +'. He was born in' + yearOfBirth + '. Today, he is ' + calculateAge(yearOfBirth) + ' years old');

// es6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calculateAge(yearOfBirth)} years old`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('S'));
console.log(n.endsWith('g'));
console.log(n.includes(' '));
console.log(firstName.repeat(3));