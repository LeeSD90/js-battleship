const Player = (n = "Player") => {
  const Gameboard = require('./gameboard');
  const player = {};
  player.name = n;
  
  player.setGameboard = (g) => {
    player.gameboard = g;
  }

  player.setOpposition = (p) => {
    player.opposition = p;
  }

  return player;
}

module.exports = Player;