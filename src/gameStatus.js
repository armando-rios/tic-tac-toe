import { gameBoard } from "./gameBoard"

export const gameStatus = (turn, p1, p2) => {
  checkDraw(p1, p2)
  if (turn) {
    checkVictory(p1, p2, turn)
  } else {
    checkVictory(p2, p1, turn)
  }
  if (message.innerText !== "O Wins" && message.innerText !== "X Wins") {
    checkDraw(p1, p2);
  }
}

const checkDraw = (p1, p2) => {
  if (p1.length == 5) {
    app.style.pointerEvents = "none"
    message.innerText = "Draw"
    message.classList.add("bg-yellow-200", "top-10", "duration-500")
    p1.forEach(item => {
      document.getElementById(item).classList.add("bg-yellow-200", "duration-700", "text-black", "text-2xl")
    });
    p2.forEach(item => {
      document.getElementById(item).classList.add("bg-orange-200", "duration-700", "text-black", "text-2xl")
    });
    setTimeout(() => {
      p1.length = 0
      p2.length = 0
      app.innerHTML = ""
      app.style.pointerEvents = "auto"
      gameBoard()
    }, 2000)
  }
}

const checkVictory = (p1, p2, turn) => {
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
      message.innerText = `${turn ? "O" : "X"} Wins`
      message.classList.add("bg-green-300", "top-10", "duration-500")
      app.style.pointerEvents = "none"
      p2.forEach(item => {
        document.getElementById(item).classList.add("bg-red-300", "duration-700", "text-black", "text-2xl")
      });
      wins[i].forEach(item => {
        document.getElementById(item).classList.add("bg-green-300", "duration-700", "text-black", "text-2xl")
      })
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
