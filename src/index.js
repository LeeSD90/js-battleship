import './css/style.css';

import render from './render';

const Player =  require('./player');
const Gameboard = require('./gameboard');

let player1;
let player2;
let playing = false;

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

const play = () => {
  let playersTurn = true;
  
  while(playing){
    if(playersTurn){
      
    }
    else{
      player2.playRound();
    }
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
      player2.gameboard.receiveAttack(cells[i].getAttribute("x"), cells[i].getAttribute("y"));
      update();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  newGame();
  play();
});