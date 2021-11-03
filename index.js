let game = 0; // A quien le toca poner

let pieces = ['O', 'X'];

let completedGame = false

let movesNumber = 0; //Cuando sea 9 entonces completedGame = true


// let addPiece = () => { console.log('Esta funcionando')}
let addPiece = (btn) => {
    game++;
    //btn = console.log(game % 2 ? console.log(pieces[0]) : console.log(pieces[1]))
    btn = document.getElementById('boarButton')
    btn.innerHTML = game % 2 ? pieces[0] : pieces[1]
}


let allButtons = document.querySelectorAll('button.boardButton')
allButtons.forEach(ind => ind.addEventListener('click', addPiece))



