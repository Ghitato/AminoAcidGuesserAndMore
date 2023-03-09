function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
function playAdditionGame() {
    console.log("Welcome to the Addition Game!");
    var playAgain = true;
    while (playAgain) {
        var num1 = getRandomNumber(50);
        var num2 = getRandomNumber(50);
        var answer = num1 + num2;
        var userAnswer = prompt("What is ".concat(num1, " + ").concat(num2, "? (Type 'q' to quit)"));
        if (userAnswer === 'q') {
            playAgain = false;
        }
        else {
            var parsedUserAnswer = parseInt(userAnswer);
            if (isNaN(parsedUserAnswer)) {
                console.log("Invalid input, please enter a number or 'q' to quit.");
            }
            else if (parsedUserAnswer === answer) {
                console.log("Correct!");
            }
            else {
                console.log("Incorrect, the answer was ".concat(answer));
            }
        }
    }
    console.log("Thanks for playing the Addition Game!");
}
playAdditionGame();
