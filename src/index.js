//TODO ship placement
//TODO improve ai
//TODO change message to be returned on attempted shots based on their outcome?

import './css/style.css';

import render from './render';

const Player =  require('./player');
const Gameboard = require('./gameboard');

let player1;
let player2;

const newGame = () => {
  player1 = Player("p1");
  player2 = Player("Computer");
  let gb = Gameboard();
  let gb2 = Gameboard();

  gb.setRandomShips();
  gb2.setRandomShips();

  player1.setGameboard(gb);
  player2.setGameboard(gb2);

  player1.setOpposition(player2);
  player2.setOpposition(player1);

  clearListeners();

  update();
}

const update = () => {
  render(player1, player2);
  setListeners();
  if(player1.gameboard.allShipsSunk() || player2.gameboard.allShipsSunk()) { 
    playing = false;
    clearListeners();
  }
}

function clearListeners(){
  let board = document.getElementById("js-battleship");
  let boardClone = board.cloneNode(true);

  board.parentNode.replaceChild(boardClone, board);
}

function setListeners(){
  let opponent = document.getElementById('opponent');
  let cells = opponent.getElementsByClassName('cell');
  for(let i = 0; i < cells.length; i++){
    cells[i].onclick = () => {
      let x = cells[i].getAttribute("x");
      let y = cells[i].getAttribute("y");
      if(!player2.gameboard.isMissed(x,y) && !player2.gameboard.isHit(x,y)){
        if(player2.gameboard.receiveAttack(x, y)){ message("You sunk a size " + player2.gameboard.board[x][y].ship.length + " ship!") }
        if(player2.playRound()){ message("Your ship was sunk! :(") }
        update();
      }
    }
  }
}

function message(string){
  let message = document.getElementById("message");
  message.innerHTML += string + "<br/>";
}

document.addEventListener('DOMContentLoaded', () => {
  newGame();
});