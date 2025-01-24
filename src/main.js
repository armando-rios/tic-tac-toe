import './style.css'
import { watcher } from './watcher'

let layout = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let turn = true
const player1 = []
const player2 = []

function uwu(pos) {
  const div = document.getElementById(pos)
  if (div.textContent == "") {
    turn ? player1.push(pos) : player2.push(pos)
    div.textContent = turn ? "O" : "X"
    watcher(turn, player1, player2)
    turn = !turn
  } else {
    console.log("ocuapado! ")
  }
}

layout.forEach(pos => {
  const test = document.createElement("div")
  test.setAttribute("id", pos)
  test.addEventListener("click", () => { uwu(pos) })
  test.classList.add("flex", "justify-center", "items-center", "border", "w-16", "h-16", "rounded-lg", "hover:scale-110", "duration-150", "cursor-pointer", "select-none")
  app.appendChild(test)
})

