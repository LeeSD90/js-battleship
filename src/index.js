import './css/style.css';

const Player =  require('./player');
const Gameboard = require('./gameboard');
const Ship = require('./ship');

const newGame = () => {
  let player1 = Player("p1");
  let player2 = Player("p2");
  let gb = Gameboard();
  let gb2 = Gameboard();

  for(i = 3; i <= 5; i++){
    console.log("new forloop")
    let running = true;
    while(running){
      try{
        let ship = Ship(i);
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let o = Math.floor(((Math.random() * 2) + 1)) == 1 ? "h" : "v";
        console.log(ship, x, y, o);
        gb.placeShip(ship, x, y, o);
        running = false;
        console.log("done...")
      }
      catch(e){
        break;
      }
    }
  }
  console.log(gb);
  player1.setGameboard(gb);
  player2.setGameboard(gb2);

}

document.addEventListener('DOMContentLoaded', () => {
  newGame();
});