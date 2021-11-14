/*let game = 0;
let pieces = ['O', 'X'];
let player_O = pieces[0];
let player_X = pieces[1];

let completedGame = false
let movesNumber = 0;*/

const buttons = Array.from(document.getElementsByClassName('boardButton'));

const playerDisplay = document.querySelector('.display-player');
const resetButton = document.querySelector('#reset');
const announcer = document.querySelector('.announcer');

let currentPlayer = 'X';

let isGameActive = true;

const PLAYERX_WON = 'PLAYERX_WON';
const PLAYERO_WON = 'PLAYERO_WON';

let movesNumber = 0;
let won = false;

buttons.forEach(button => {
    button.classList.remove(`player${currentPlayer}`)
    button.classList.add(`player${currentPlayer}`)
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    //console.log(button.classList)
})

function changePlayer() {
    playerDisplay.classList.remove(`player${currentPlayer}`)
    currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
    playerDisplay.innerHTML = currentPlayer;
    playerDisplay.classList.add(`player${currentPlayer}`);
    //console.log(currentPlayer)  
}

function addPiece(event) {
    let button = event.target
    let id = event.target.id // id del boton pulsado
    document.getElementById(id).disabled = true;
    button.innerHTML = currentPlayer;
    changePlayer();
    movesNumber++;
    console.log(movesNumber)
    let c0 = document.getElementById('0').innerHTML;
    let c1 = document.getElementById('1').innerHTML;
    let c2 = document.getElementById('2').innerHTML;
    let c3 = document.getElementById('3').innerHTML;
    let c4 = document.getElementById('4').innerHTML;
    let c5 = document.getElementById('5').innerHTML;
    let c6 = document.getElementById('6').innerHTML;
    let c7 = document.getElementById('7').innerHTML;
    let c8 = document.getElementById('8').innerHTML;

    if (button.innerHTML === '') {
        won = false;
    } else if ((c0 == c1) && (c0 == c2) && (c0)) {
        //document.style.backgroundColor = 'Fuchsia'
        won = true;
    } else if ((c3 == c4) && (c3 == c5) && (c5)) {
        won = true;
    } else if ((c6 == c7) && (c6 == c8) && (c6)) {
        won = true;
    } else if ((c0 == c3) && (c0 == c6) && (c0)) {
        won = true;
    } else if ((c1 == c4) && (c1 == c7) && (c1)) {
        won = true;
    } else if ((c2 == c5) && (c2 == c8) && (c2)) {
        won = true;
    } else if ((c0 == c4) && (c0 == c8) && (c0)) {
        won = true;
    } else if ((c2 == c4) && (c2 === c6) && (c2)) {
        won = true;
    }


    
    const announce = (type) => {
        switch (type) {
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
        }
        announcer.classList.remove('hide');
    }
    if ((movesNumber >= 3) && (won === true)) {
        announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
    }
}

function reset() {

    announcer.classList.add('hide');

    if (currentPlayer === 'O') {
        changePlayer();
    }

    buttons.forEach(button => {
        button.innerText = '';
        button.classList.remove('playerX');
        button.classList.remove('playerO');
    });
    isGameActive = true;
    addPiece()
}

