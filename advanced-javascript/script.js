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
/*
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
*/
/*
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what ux design is?' );
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
teacherQuestion('Shock');
var designQuestion = interviewQuestion('designer');
designQuestion('Jane');
interviewQuestion('teacher')('Mark');
*/

// IIFE
/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(1);
*/

// closures
/*
function retirement(retirementAge) {
    var desc = ' years left util retirement.';
    return function (yearOfBirth) {
        var year = new Date().getFullYear(); 
        var age = year - yearOfBirth;
        console.log((retirementAge - age) + desc);
    }
}

var retirementTW = retirement(65);
retirementTW(1990);

retirement(65)(1990);

function interviewQuestion(job) {
    return function (name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what ux design is?' );
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
}

interviewQuestion('designer')('John');
interviewQuestion('teacher')('Mike');
*/

// Bind, call and apply
var john = {
    name: 'John',
    age: 26,
    job:'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m '
            + this.name + ', I\'m a '
            + this.job + ' and I\'m '
            + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m '
            + this.name + ', I\'m a '
            + this.job + ' and I\'m '
            + this.age + ' years old.');
        }
    }
}

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('afternoon');


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

function isFullAge(limit, age) {
    return age >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
