// create a bunch of divs of boxes for the player to put th xs and os in

//grab a reference to the game-board
const gameBoard = document.querySelector('.game-board');
function handleBoxClick(e){
    console.log(e);
    e.target.innerText = currentPlayer;
    gameState[e.target.getAttribute('data')] = currentPlayer

    checkWin()
    //currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; 'This equals same as below'
    if (currentPlayer === 'X'){
        currentPlayer = 'O'
    }else{
        currentPlayer = 'X'
    }
    //update the text for whos turn it is
    // check to see who wins
}
function checkWin(){
    for(let i = 0; i < winningConditions.length; i++){
    let condition = winningConditions[i];
    //[2,4,6]
    if(
        gameState[condition[0]] === gameState[condition[1]] && 
        gameState[condition[0]] === gameState[condition[2]] &&
        gameState[condition[0]] !== '' 

        ){
        console.log('winner')
    }    
    }
}

for(let i = 0; i < 9; i++){

    //create a reference a div call box
    const box = document.createElement('div');

    //give the box a class called box
    box.setAttribute('class','box');
    box.setAttribute('data', i);
    box.addEventListener('click', handleBoxClick)

    //append to the body
    gameBoard.appendChild(box);
}

let playerTurn = document.querySelector('.player-turn');
let currentPlayer = "X";

//gamestate record of the board
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

// const playerXWon = 'player X won';
// const playerOWon = 'player O won';
// const tieGame = 'Tie'


let winningConditions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];
playerTurn.innerHTML = currentPlayer + "'s turn";

// Clear button functionality

const clearButton = document.querySelector('.clear-button');

clearButton.addEventListener('click', () =>{
    //get a list of all of our boxes
    
const boxes = document.querySelectorAll('.box');
    
    // go through each box and set its innerText to '';
    for(let i = 0; i < boxes.length; i++){
        let currentBox = boxes[i];
        currentBox.innerText = '';
    }

})

