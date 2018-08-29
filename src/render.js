function renderBoard(gameboard, hidden = false){
  let container = document.createElement('div');
  let b = document.createElement('div');
  b.className = "board";
  if(hidden) { b.id = "opponent"; }

  gameboard.board.forEach((row, i) => {
    let r = document.createElement('div');
    r.className = "row";
    row.forEach((col, j) => {
      let c = document.createElement('div');
      c.className = "cell";
      c.setAttribute('x', i);
      c.setAttribute('y', j);
      if(!hidden){
        if(gameboard.isOccupied(i, j)){ c.classList.add("ship-present"); } 
      }
      if(gameboard.isMissed(i, j)){ c.classList.add("missed-shot"); }
      r.appendChild(c);
    })
    b.appendChild(r);
  })
  container.appendChild(b);
  return container.innerHTML;
}

const render = (player1, player2) => {
  document.getElementById("js-battleship").innerHTML = renderBoard(player1.gameboard) + renderBoard(player2.gameboard, true);
}

export default render;