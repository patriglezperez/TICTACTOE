let game = 0;
let pieces = ['O', 'X'];
let player_O = pieces[0];
let player_X = pieces[1];

let completedGame = false
let movesNumber = 0;

let addPiece = (event) => {

    let currentTurn = game % 2 ? player_O : player_X;

    game++;

    let button = event.target
    if (!completedGame && button.innerHTML == "") {
        button.innerHTML = currentTurn
        /* let playerDisplay = document.getElementsById('player').innerHTML
        if(currentTurn == 'X'){
           playerDisplay.classList.add('playerX')
        } else {
            playerDisplay.classList.add('playerO')
        } */
        movesNumber++;
    }

    let id = event.target.id // id del boton pulsado
    document.getElementById(id).disabled = true;

    let nextTurn = game % 2 ? 'O' : 'X';
     
    document.getElementById('player').innerHTML = `${nextTurn}`
    
    if (validate()){
        document.getElementById('winner').innerHTML += `¡¡ The winner is ${currentTurn} player !!`
        if (currentTurn == "X" ) {
    
        }
    } 
}

/* function Validate (...args) { //entran los botones
    valueCell = args.map(ind => ind.innerHTML) // saco valo de los botones
    if (valueCell[0] != "" && valueCell.for((i) => i == arr[0])){ // si todos los elementos son como el primer caso
        args.forEach(n => n.style.backgroundColor = "Fuchsia")
        return true
    } else {
        return false
    }
} */

function validate() {
    let c0 = document.getElementById('0').innerHTML;
    let c1 = document.getElementById('1').innerHTML;
    let c2 = document.getElementById('2').innerHTML;
    let c3 = document.getElementById('3').innerHTML;
    let c4 = document.getElementById('4').innerHTML;
    let c5 = document.getElementById('5').innerHTML;
    let c6 = document.getElementById('6').innerHTML;
    let c7 = document.getElementById('7').innerHTML;
    let c8 = document.getElementById('8').innerHTML;

    while (movesNumber >= 3) {
        if ((c0 == c1) && (c0 == c2) && (c0)) {
            //document.style.backgroundColor = 'Fuchsia'
            return true;
        } else if ((c3 == c4) && (c3 === c5) && (c5)) {
            return true;
        } else if ((c6 == c7) && (c6 === c8) && (c6)) {
            return true;
        } else if ((c0 == c3) && (c0 == c6) && (c0)) {
            return true;
        } else if ((c1 == c4) && (c1 == c7) && (c1)) {
            return true;
        } else if ((c2 == c5) && (c2 == c8) && (c2)) {
            return true;
        } else if ((c0 == c4) && (c0 == c8) && (c0)) {
            return true;
        }else if ((c2 == c4 ) && (c2 === c6) && (c2)){
            return true;
        } else {
            return false;
        }
    } 
}

/* if (movesNumber > 9 || validate !=false){
    console.log('fin del juego')
} else {
    console.log('sigue jugando')
} */