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

  update();
}

const update = () => {
  document.getElementById("js-battleship").innerHTML = render(player1, player2);
}

const play = () => {
  let playing = true;
  while(playing){
    playing = false;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  newGame();
  play();
});