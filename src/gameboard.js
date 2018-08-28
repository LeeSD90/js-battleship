const Ship = require('./ship');

const GameBoard = () => {
  const gameboard = {};
  gameboard.board = [];
  gameboard.missed = [];

  for(i = 0; i < 10; i++){
    gameboard.board.push(new Array(10).fill(0));
  }

  gameboard.setRandomShips = () => {
    let threePlaced = false;
    for(let i = 2; i < 6; i++){
      let running = true;
      while(running){
        try{
          let ship = Ship(i);
          let x = Math.floor(Math.random() * 10);
          let y = Math.floor(Math.random() * 10);
          let o = Math.floor(((Math.random() * 2) + 1)) == 1 ? "h" : "v";
          gameboard.placeShip(ship, x, y, o);
          if(i === 3 && !threePlaced){ threePlaced = true; }
          else running = false;
        }
        catch(e){
        }
      }
    }
  }

  gameboard.placeShip = (ship, row, col, o) => {
    let countRow = row;
    let countCol = col;

    try{
      for(i = 0; i < ship.length; i++){
        if(isOccupied(countRow, countCol)){ throw "Cell is occupied!" };
        o === "h" ? countCol++ : countRow++;
      }
      for(i = 0; i < ship.length; i++){
        gameboard.board[row][col] = { ship: ship, index: i };
        o === "h" ? col++ : row++;
      }
    }
    catch(e){
      throw new Error("Coordinates are already occupied or are outside of the gameboard");
    }
  }

  gameboard.receiveAttack = (x, y) => {
    if(gameboard.board[x][y] != 0){
      if(gameboard.board[x][y].ship.hit(gameboard.board[x][y].index)){
        return true;
      }
    }
    else{
      gameboard.missed.push([x,y]);
      return false;
    }
  }

  gameboard.allShipsSunk = () => {
    let result = true;
    gameboard.board.forEach(row => {
      row.forEach(c => {
        if(c.ship && !c.ship.isSunk()) {
          result = false;
          return;
        }
      })
    })
    return result;
  }

  gameboard.render = (hidden = true) => {
    let container = document.createElement('div');
    let b = document.createElement('div');
    b.className = "board";

    gameboard.board.forEach((row, i) => {
      let r = document.createElement('div');
      r.className = "row";
      row.forEach((col, j) => {
        let c = document.createElement('div');
        c.className = "col";

        if(hidden){
          if(isMissed(i, j)){ c.classList.add("missed-shot"); }
         }
        else { 
          if(isOccupied(i, j)){ c.classList.add("ship-present"); } 
        }

        r.appendChild(c);
      })
      b.appendChild(r);
    })
    container.appendChild(b);
    return container.innerHTML;
  }

  function isMissed(x, y){
    return gameboard.missed.includes([x,y]);
  }

  function isOccupied(x, y){
    if (gameboard.board[x][y] != 0) { return true; } else return false;
  }

  return gameboard;
}

module.exports = GameBoard;