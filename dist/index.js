"use strict";
// Define an array of objects, each representing an amino acid
const aminoAcids = [
    { name: "Alanine", oneLetterCode: "A", threeLetterCode: "ALA" },
    { name: "Arginine", oneLetterCode: "R", threeLetterCode: "ARG" },
    { name: "Asparagine", oneLetterCode: "N", threeLetterCode: "ASN" },
    { name: "Aspartic Acid", oneLetterCode: "D", threeLetterCode: "ASP" },
    { name: "Cysteine", oneLetterCode: "C", threeLetterCode: "CYS" },
    { name: "Glutamine", oneLetterCode: "Q", threeLetterCode: "GLN" },
    { name: "Glutamic Acid", oneLetterCode: "E", threeLetterCode: "GLU" },
    { name: "Glycine", oneLetterCode: "G", threeLetterCode: "GLY" },
    { name: "Histidine", oneLetterCode: "H", threeLetterCode: "HIS" },
    { name: "Isoleucine", oneLetterCode: "I", threeLetterCode: "ILE" },
    { name: "Leucine", oneLetterCode: "L", threeLetterCode: "LEU" },
    { name: "Lysine", oneLetterCode: "K", threeLetterCode: "LYS" },
    { name: "Methionine", oneLetterCode: "M", threeLetterCode: "MET" },
    { name: "Phenylalanine", oneLetterCode: "F", threeLetterCode: "PHE" },
    { name: "Proline", oneLetterCode: "P", threeLetterCode: "PRO" },
    { name: "Serine", oneLetterCode: "S", threeLetterCode: "SER" },
    { name: "Threonine", oneLetterCode: "T", threeLetterCode: "THR" },
    { name: "Tryptophan", oneLetterCode: "W", threeLetterCode: "TRP" },
    { name: "Tyrosine", oneLetterCode: "Y", threeLetterCode: "TYR" },
    { name: "Valine", oneLetterCode: "V", threeLetterCode: "VAL" },
];
// Define a function to generate a random index in the array
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}
// Define a function to ask the user a question and check the answer
function askQuestion() {
    const aminoAcid = aminoAcids[getRandomIndex(aminoAcids.length)];
    const randomQuestion = getRandomIndex(3);
    let questionText = "";
    switch (randomQuestion) {
        case 0:
            questionText = `Given the full name of the amino acid ${aminoAcid.name}, give the one letter code or the three letter code (type "X" to exit the code)`;
            break;
        case 1:
            questionText = `Given the three letter code of the amino acid ${aminoAcid.threeLetterCode}, give either full name or the one letter code (type "x" to exit the code)`;
            break;
        case 2:
            questionText = `Given the one letter code of the amino acid ${aminoAcid.oneLetterCode}, give either the full name or the three letter code (type "X" to exit the code)`;
            break;
        default:
            break;
    }
    const userAnswer = prompt(questionText);
    if (userAnswer === "X") {
        return false; // Exit the function
    }
    //let expectedAnswer: string;
    let expectedAnswer = "";
    switch (randomQuestion) {
        case 0:
            expectedAnswer = aminoAcid.oneLetterCode || aminoAcid.threeLetterCode;
            if (userAnswer.toUpperCase() === expectedAnswer.toUpperCase()) {
                console.log("Correct!");
                return true; // Question answered correctly
            }
            expectedAnswer = aminoAcid.threeLetterCode || aminoAcid.oneLetterCode;
            break;
        case 1:
            expectedAnswer = aminoAcid.name || aminoAcid.oneLetterCode;
            if (userAnswer.toUpperCase() === expectedAnswer.toUpperCase()) {
                console.log("Correct!");
                return true; // Question answered correctly
            }
            expectedAnswer = aminoAcid.oneLetterCode || aminoAcid.name;
            break;
        case 2:
            expectedAnswer = aminoAcid.name || aminoAcid.threeLetterCode;
            if (userAnswer.toUpperCase() === expectedAnswer.toUpperCase()) {
                console.log("Correct!");
                return true; // Question answered correctly
            }
            expectedAnswer = aminoAcid.threeLetterCode || aminoAcid.name;
            break;
        default:
            break;
    }
    if (userAnswer.toUpperCase() === expectedAnswer.toUpperCase()) {
        console.log("Correct!");
        return true; // Question answered correctly
    }
    else {
        console.log(`Sorry, the correct answer was ${expectedAnswer}`);
        return false; // Question answered incorrectly
    }
}
// Define a variable to keep track of the score
let score = 0;
// Loop to ask questions until the user types "E" to exit
while (askQuestion()) {
    score++;
    console.log(`Your score is now ${score}`);
}
console.log(`Thanks for playing! Your final score was ${score}`);
