const GameBoard = () => {
  const gameboard = {};
  gameboard.board = []

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
      throw new Error("Specified position is outside of the board");
    }
  }

  return gameboard;
}

module.exports = GameBoard;