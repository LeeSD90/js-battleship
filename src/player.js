const Player = (n = "Player") => {
  const player = {};
  player.name = n;
  
  player.setGameboard = (g) => {
    player.gameboard = g;
  }

  player.setOpposition = (p) => {
    player.opposition = p;
  }

  player.renderBoards = () => {
    let boards = player.gameboard.render(false) + player.opposition.gameboard.render();
    return boards;
  }

  return player;
}

module.exports = Player;