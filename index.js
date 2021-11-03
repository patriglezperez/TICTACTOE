let game = 0; // A quien le toca poner

let pieces = ['O', 'X'];

let completedGame = false

let movesNumber = 0; //Cuando sea 9 entonces completedGame = true


// let addPiece = () => { console.log('Esta funcionando')}
let addPiece = (btn) => {
    btn.innerHTML = console.log(pieces[game])
    movesNumber += 1;
}

let allButtons = document.querySelectorAll('button.boardButton')
allButtons.forEach(ind => ind.addEventListener('click', addPiece))



