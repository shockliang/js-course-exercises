// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
*/

// Object create
/*
var personProto = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: {value: 1969},
    job: {value: 'designer'}
});
*/

// Primitives vs objects
/*
var a = 65;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'Shock',
    age: 34
}

var obj2 = obj1;

obj1.age = 100;

console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Shock',
    city: 'Taipei'
}

function change(a, b) {
    a = 30;
    b.city = 'Taichung';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, callback) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(callback(arr[i]));
    }

    return arrRes;
}

function calculateAge(yearOfBirth) {
    return 2017 - yearOfBirth;
}

function isFullAge(age) {
    return age >= 18;
}

function maxHeartRate(age) {
    if(age >= 18 && age <= 81) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var heartRates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(heartRates);