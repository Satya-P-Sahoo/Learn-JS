const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const time_left = document.querySelector('#time');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let curTime = 60;
let timer_id = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    const random_pos = Math.floor(Math.random() * 9);
    const random_square = squares[random_pos];
    random_square.classList.add('mole');
    hitPosition = random_square.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.innerHTML = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    timer_id = setInterval(randomSquare, 1000);
}
moveMole();

function countDown() {
    curTime--;
    time_left.innerHTML = curTime;

    if (curTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timer_id);
        alert("Time's Up !! \n Your final Score is " + result);
    }
}
let countDownTimerId = setInterval(countDown, 1000);