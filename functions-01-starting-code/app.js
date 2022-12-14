const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice =  () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

const getComputerChoice = () =>{
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) => {
    if (cChoice === pChoice) {
        return RESULT_DRAW;
    } else if (
        cChoice === ROCK && pChoice === PAPER ||
        cChoice === PAPER && pChoice === SCISSORS ||
        cChoice === SCISSORS && pChoice === ROCK
    ) {
        return RESULT_PLAYER_WINS;
    }else {
        return RESULT_COMPUTER_WINS;
    }
};

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    const winner = getWinner(playerSelection, computerChoice);
    let mssg = `You picked ${playerSelection}, computer picked ${computerChoice}, therefore you `;

    if (winner === RESULT_DRAW) {
        mssg = mssg + 'had a draw.';
    }else if(winner === RESULT_PLAYER_WINS) {
        mssg = mssg + 'won.';
    }else {
        mssg = mssg + 'lost.';
    }

    alert(mssg);
    gameIsRunning = false;
});



const sumUp = (...numbers) => {
    let sum =0;
    for (const num of numbers) {
        sum += num;
    }
    return sum;
}


const subtractUp = function() {
    let sum =0;
    for (const num of arguments) {
        sum -= num;
    }
    return sum;
}


console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(subtractUp(1, 10, 15, 20));

const combine = (resultHandler, operation, ...numbers) => {
    const validateNumber = (number) => {
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;
    for (const num of numbers) {
        if (operation === 'ADD') {
            sum += validateNumber(num);
        } else {
            sum -= validateNumber(num);
        }
    }
    resultHandler(sum);
}

const showResult = (messageText, result) => {
    alert(messageText + ' ' + result);
}

console.log(combine(showResult.bind(this, 'The result after adding all numbers is: '), 'ADD', 1, 5, 'fdsa', -3, 6, 10));






// const start = function startGame() {
//   console.log('Game is starting...');
// };

// // anyonmous function
// const myfoo = function() {
//     console.log('Hello World');
// };

// startGameBtn.addEventListener('click', start);

// const person = {
//     name: 'Max',
//     greet: function greet() {
//         console.log('Hi, I am ' + this.name);
//     }
// }

// person.greet();  //this is a method

// const copiedPerson = {...person};
// console.log(startGame);
// console.dir(startGame);

// // using anyonmous function
// // startGameBtn.addEventListener('click', function() {
// //     console.log('Game is starting...');
// // });
