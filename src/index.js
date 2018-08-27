import './css/style.css';

const Player =  require('./player');
const Gameboard = require('./gameboard');
const Ship = require('./ship');

const placeShips = (board) => {
  for(let i = 3; i <= 5; i++){
    let running = true;
    while(running){
      try{
        let ship = Ship(i);
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let o = Math.floor(((Math.random() * 2) + 1)) == 1 ? "h" : "v";
        board.placeShip(ship, x, y, o);
        running = false;
      }
      catch(e){
      }
    }
  }
  return board;
}

const newGame = () => {
  let player1 = Player("p1");
  let player2 = Player("p2");
  let gb = Gameboard();
  let gb2 = Gameboard();

  gb = placeShips(gb);
  gb2 = placeShips(gb2);

  player1.setGameboard(gb);
  player2.setGameboard(gb2);

  console.log(player1.gameboard);
  console.log(player2.gameboard);
}

document.addEventListener('DOMContentLoaded', () => {
  newGame();
});