export const watcher = (turn, p1, p2) => {
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

  if (turn) {
    console.log(p1)
    console.log("player 1 watcher")
    for (let i = 0; i < wins.length; i++) {
      console.log(`loop numer ${i}`)
      let final = false
      for (let j = 0; j < 3; j++) {
        let res = p1.includes(wins[i][j]);
        if (res) {
          final = true
          console.log("find numer " + wins[i][j])
        } else {
          console.log("stop")
          final = false
          break
        }
      }
      console.log(final)
      if (final) {
        alert("Wins p1")
      }
    }
  } else {
    console.log(p2)
    console.log("player 2 watcher")
    for (let i = 0; i < wins.length; i++) {
      console.log(`loop numer ${i}`)
      let final = false
      for (let j = 0; j < 3; j++) {
        let res = p2.includes(wins[i][j]);
        if (res) {
          final = true
          console.log("find numer " + wins[i][j])
        } else {
          console.log("stop")
          final = false
          break
        }
      }
      console.log(final)
      if (final) {
        alert("Wins p2")
      }
    }
  }
}
