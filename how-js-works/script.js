///////////////////////////////////////
// Lecture: Hoisting

// calculateAge(1990);

// function calculateAge(year) {
//     console.log(2016 - year);
// }

// var retirement = function(year) {
//     console.log(65 - (2016 - year));
// }

//retirement(1990);

// variables
// console.log(age);
// var age = 23;


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// calculateAge(1985);

// function calculateAge(year) {
//     console.log(2016 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge : function() {
        console.log(this);

        function inner() {
            console.log(this);
        }

        inner();
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();





