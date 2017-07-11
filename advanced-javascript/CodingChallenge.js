
var Question = function(describe, options, answer) {
    this.describe = describe;
    this.options = options;
    this.answer = answer;
    this.showOptions = function() {
        console.log(this.describe);
        for (var i = 0; i < this.options.length; i++) {
            console.log('('+ (i+1) + ') ' + this.options[i]);
        }
    }

    this.isCorrectAnswer = function(playerAnswer) {
        return playerAnswer === this.answer.toString();
    }
}

var question1 = new Question('How many legs does a crab have?', ['6','8','10'], 2);
var question2 = new Question('How old the earth?',['4.54 billion years', '13 billion years', '4.6 billion years'], 1);
var question3 = new Question('Who is the most valuable player of NBA in the 2017?', 
                    ['Kawhi Leonard','James Harden', 'Russell Westbrook'], 3);
                
var questions = [question1, question2, question3];

var isContinue = true;

while (isContinue) {
    var idx = Math.floor(Math.random() * questions.length);
    console.log(idx);
    var showQuestion = questions[idx];
    showQuestion.showOptions();

    var playerAnswer = window.prompt("What is your answer");

    if(playerAnswer === 'exit') {
        isContinue = false;
    } else {
        console.log('Your answer: ' + playerAnswer);

        if(showQuestion.isCorrectAnswer(playerAnswer)) {
            console.log('Correct!');   
        } else {
            console.log('Wrong answer');
        }
    }
}





