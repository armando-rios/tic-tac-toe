import { gameBoard } from "./gameBoard"

export const gameStatus = (turn, p1, p2) => {
  checkDraw(p1, p2)
  if (turn) {
    checkVictory(p1, p2)
  } else {
    checkVictory(p2, p1)
  }
}

const checkDraw = (p1, p2) => {
  if (p1.length == 5) {
    console.log("empate")
    p1.length = 0
    p2.length = 0
    app.innerHTML = ""
    gameBoard()
  }
}

const checkVictory = (p1, p2) => {
  const wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [7, 5, 3],
  ]
  for (let i = 0; i < wins.length; i++) {
    let final = false
    for (let j = 0; j < 3; j++) {
      let res = p1.includes(wins[i][j]);
      final = res ? true : false;
      if (!res) break;
    }
    if (final) {
      app.style.pointerEvents = "none"
      setTimeout(() => {
        console.log(`Wins: ${p1} | ${wins[i]}`)
        app.innerHTML = ""
        p1.length = 0
        p2.length = 0
        app.style.pointerEvents = "auto"
        gameBoard()
      }, 2000)
      break
    }
  }
}

// resetPlayer() { }
