const GameBoard = () => {
  const gameboard = {};
  gameboard.board = [];
  gameboard.missed = [];

  for(i = 0; i < 10; i++){
    gameboard.board.push(new Array(10).fill(0));
  }

  gameboard.placeShip = (ship, x, y, o) => {
    try{
      gameboard.board[x][y] = { ship: ship, index: 0 };
      for(i = 1; i < ship.length; i++){
        o === "h" ? x++ : y++;
        gameboard.board[x][y] = { ship: ship, index: i };
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

  return gameboard;
}

module.exports = GameBoard;