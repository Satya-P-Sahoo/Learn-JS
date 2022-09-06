const card_arr = [
    {
        name: 'heart_ace',
        img: 'img/heart_ace.png'
    },
    {
        name: 'clover_ace',
        img: 'img/clover_ace.png'
    },
    {
        name: 'diamond_king',
        img: 'img/diamond_king.png'
    },
    {
        name: 'clover_king',
        img: 'img/clover_king.png'
    },
    {
        name: 'diamond_queen',
        img: 'img/diamond_queen.png'
    },
    {
        name: 'spade_joker',
        img: 'img/spade_joker.png'
    },

    {
        name: 'heart_ace',
        img: 'img/heart_ace.png'
    },
    {
        name: 'clover_ace',
        img: 'img/clover_ace.png'
    },
    {
        name: 'diamond_king',
        img: 'img/diamond_king.png'
    },
    {
        name: 'clover_king',
        img: 'img/clover_king.png'
    },
    {
        name: 'diamond_queen',
        img: 'img/diamond_queen.png'
    },
    {
        name: 'spade_joker',
        img: 'img/spade_joker.png'
    }
]

card_arr.sort(() => 0.5 - Math.random());
// console.log(card_arr);

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');

function create_board() {
    for (let i = 0; i < card_arr.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'img/cardback_1.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flip_card);
        gridDisplay.appendChild(card);
    }
}
create_board();

let card_chosen = [];
let card_chosen_id = [];
let cards_matched = [];
function checkCard() {
    const cards = document.querySelectorAll('img');
    // console.log('Inside checkCard');
    const id_1 = card_chosen_id[0];
    const id_2 = card_chosen_id[1];
    if (id_1 === id_2) {
        // console.log('Same Card');
        cards[id_1].setAttribute('src', 'img/cardback_1.png');
    } else if (card_chosen[0] === card_chosen[1]) {
        // console.log('Found a Match');
        cards[id_1].setAttribute('src', 'img/final.png');
        cards[id_1].removeEventListener('click', flip_card);

        cards[id_2].setAttribute('src', 'img/final.png');
        cards[id_2].removeEventListener('click', flip_card);
        cards_matched.push(card_chosen);
    } else {
        // console.log('Try again');
        cards[id_1].setAttribute('src', 'img/cardback_1.png');
        cards[id_2].setAttribute('src', 'img/cardback_1.png');
    }
    card_chosen = [];
    card_chosen_id = [];
    resultDisplay.innerHTML = 'Score : ' + cards_matched.length;

    if (cards_matched.length == card_arr.length / 2) {
        resultDisplay.innerHTML = 'Congratulations !!! You Won.';
    }
}


function flip_card() {
    const card_id = this.getAttribute('data-id');
    card_chosen.push(card_arr[card_id].name);
    card_chosen_id.push(card_id);
    this.setAttribute('src', card_arr[card_id].img);
    // console.log('clicked', card_id);

    if (card_chosen.length == 2) {
        setTimeout(checkCard, 500);
    }
}
