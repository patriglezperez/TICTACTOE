let game = 0; // A quien le toca poner

let pieces = ['O', 'X'];

let completedGame = false

let movesNumber = 0; //Cuando sea 9 entonces completedGame = true


// let addPiece = () => { console.log('Esta funcionando')}
let addPiece = (event) => {
    event.preventDefault()
   
    let value = event.target.value
    //console.log(game % 2 ? console.log(pieces[0]) : console.log(pieces[1]))
   
    let id =  event.target.id
    
    /* let innerTextButton = document.getElementsByClassName('boardButton')[0].innerHTML */
    //console.log(innerTextButton)
    let result = game % 2 ? pieces[0] : pieces [1] 
    document.getElementById(id).innerHTML = result

    game += 1;
    
    console.log('player '+ game)
}





