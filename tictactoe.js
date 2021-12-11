// create a bunch of divs of boxes for the player to put th xs and os in

//grab a reference to the game-board
const gameBoard = document.querySelector('.game-board');
function handleBoxClick(e){
    console.log(e);
    e.target.innerText = currentPlayer;
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
let gameState = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

playerTurn.innerHTML = currentPlayer + "'s turn";

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