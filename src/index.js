//TODO ship placement
//TODO improve ai
//TODO ship sunk notifcation

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
        player2.gameboard.receiveAttack(x, y);
        player2.playRound();
        update();
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  newGame();
});