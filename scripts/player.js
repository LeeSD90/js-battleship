const Player = (n = "Player") => {
  const Gameboard = require('./gameboard');
  const player = {};
  player.name = n;
  player.gameboard = Gameboard();
  return player;
}

module.exports = Player;