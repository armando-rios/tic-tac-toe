import { gameBoard } from "./gameBoard"

export const gameStatus = (turn, p1, p2) => {

  checkDraw(p1)
  if (turn) {
    checkVictory(p1)
  } else {
    checkVictory(p2)
  }
}

const checkDraw = (p) => {
  if (p.length == 5) {
    console.log("empate")
    app.innerHTML = ""
    gameBoard()
  }
}

const checkVictory = (p) => {
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
      let res = p.includes(wins[i][j]);
      if (res) {
        final = true
      } else {
        final = false
        break
      }
    }
    if (final) {
      alert("Wins: " + p)
    }
  }
}
