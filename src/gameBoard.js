import { gameStatus } from "./gameStatus"
export function gameBoard() {
  message.innerText = ""
  message.classList.remove("bg-yellow-200", "bg-green-300", "bg-red-300", "top-10", "duration-500")

  if (!turn) {
    turn = true
  }
  let layout = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  layout.forEach(pos => {
    const test = document.createElement("div")
    test.setAttribute("id", pos)
    test.addEventListener("click", () => { updateBoard(pos) })
    test.classList.add("flex", "justify-center", "items-center", "border", "w-16", "h-16", "rounded-lg", "hover:scale-110", "duration-150", "cursor-pointer", "select-none", "font-bold")
    app.appendChild(test)
  })
}

let turn = true
const player1 = []
const player2 = []

function updateBoard(pos) { // pos = id
  console.log(turn)
  const div = document.getElementById(pos)
  if (div.textContent == "") {
    turn ? player1.push(pos) : player2.push(pos)
    div.textContent = turn ? "O" : "X"
    gameStatus(turn, player1, player2)
    turn = !turn
  } else {
    console.log("ocuapado! ")
  }
}
