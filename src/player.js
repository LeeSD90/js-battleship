const Player = (n = "Player") => {
  const player = {};
  player.name = n;
  
  player.setGameboard = (g) => {
    player.gameboard = g;
  }

  player.setOpposition = (p) => {
    player.opposition = p;
  }

  player.playRound = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);

    while(player.opposition.gameboard.isMissed(x, y)){
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
    }

    return player.opposition.gameboard.receiveAttack(x, y);
  }

  return player;
}

module.exports = Player;