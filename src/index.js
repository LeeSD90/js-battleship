import './css/style.css';

const Player =  require('./player');
const Gameboard = require('./gameboard');

const newGame = () => {
  let player1 = Player("p1");
  let player2 = Player("p2");
  let gb = Gameboard();
  let gb2 = Gameboard();

  gb.setRandomShips();
  gb2.setRandomShips();

  player1.setGameboard(gb);
  player2.setGameboard(gb2);

  console.log(player1.gameboard);
  console.log(player2.gameboard);
}

document.addEventListener('DOMContentLoaded', () => {
  newGame();
});