import './css/style.css';

const Player =  require('./player');
const Gameboard = require('./gameboard');

let player1;
let player2;

function render(){
  document.getElementById("js-battleship").innerHTML = player1.renderBoards();
}

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

  render();
}

document.addEventListener('DOMContentLoaded', () => {
  newGame();
});