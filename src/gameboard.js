const GameBoard = () => {
  const gameboard = {};
  gameboard.board = [];
  gameboard.missed = [];

  for(i = 0; i < 10; i++){
    gameboard.board.push(new Array(10).fill(0));
  }

  gameboard.placeShip = (ship, row, col, o) => {
    let countRow = row;
    let countCol = col;

    try{
      for(i = 0; i < ship.length; i++){
        isOccupied(countRow, countCol);
        o === "h" ? countRow++ : countCol++;
      }
      for(i = 0; i < ship.length; i++){
        gameboard.board[row][col] = { ship: ship, index: i };
        o === "h" ? row++ : col++;
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

function isOccupied(x, y){
  if (gameboard.board[x][y] != 0) { throw "Cell is occupied!" }
}

  return gameboard;
}

module.exports = GameBoard;