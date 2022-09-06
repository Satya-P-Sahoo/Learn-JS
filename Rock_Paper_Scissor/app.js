const comp_choice_display = document.getElementById('comp-choice');
const user_choice_display = document.getElementById('user-choice');
const result_display = document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

let userChoice, compChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    user_choice_display.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const ch = Math.floor(Math.random() * possibleChoices.length) + 1;

    if (ch === 1) {
        compChoice = 'Rock';
    } else if (ch === 2) {
        compChoice = 'Paper';
    } else {
        compChoice = 'Scissor';
    }
    comp_choice_display.innerHTML = compChoice;
}

function getResult() {
    if (compChoice === userChoice) {
        result = 'Draw'
    }
    if (compChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You Won'
    }
    if (compChoice === 'Rock' && userChoice === 'Scissor') {
        result = 'Computer Won'
    }
    if (compChoice === 'Paper' && userChoice === 'Rock') {
        result = 'Computer Won'
    }
    if (compChoice === 'Paper' && userChoice === 'Scissor') {
        result = 'You Won'
    }
    if (compChoice === 'Scissor' && userChoice === 'Rock') {
        result = 'You Won'
    }
    if (compChoice === 'Scissor' && userChoice === 'Paper') {
        result = 'Computer Won'
    }

    result_display.innerHTML = result;
}