import './css/style.css';

const Player =  require('./player');
const Gameboard = require('./gameboard');
const Ship = require('./ship');

const newGame = () => {
  let player1 = Player("p1");
  let player2 = Player("p2");
  let gb = Gameboard();
  let gb2 = Gameboard();

  player1.setGameboard(gb);
  player2.setGameboard(gb2);

}

document.addEventListener('DOMContentLoaded', () => {
  newGame();
});