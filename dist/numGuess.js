"use strict";
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
function playAdditionGame() {
    console.log("Welcome to the Addition Game!");
    let playAgain = true;
    while (playAgain) {
        const num1 = getRandomNumber(50);
        const num2 = getRandomNumber(50);
        const answer = num1 + num2;
        const userAnswer = prompt(`What is ${num1} + ${num2}? (Type 'q' to quit)`);
        if (userAnswer === 'q') {
            playAgain = false;
        }
        else {
            const parsedUserAnswer = parseInt(userAnswer);
            if (isNaN(parsedUserAnswer)) {
                console.log("Invalid input, please enter a number or 'q' to quit.");
            }
            else if (parsedUserAnswer === answer) {
                console.log("Correct!");
            }
            else {
                console.log(`Incorrect, the answer was ${answer}`);
            }
        }
    }
    console.log("Thanks for playing the Addition Game!");
}
playAdditionGame();
