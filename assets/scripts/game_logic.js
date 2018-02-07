'use strict'

const o = 'o'
const x = 'x'
const gameboard =
  [
    '', '', '',
    '', '', '',
    '', '', ''
  ]

let winConditions
let checkForWin
let xturn = true
const takeTurn = function (index) {
  if (gameboard[index] === '') {
    if (xturn) {
      gameboard[index] = x
    } else {
      gameboard[index] = o
    }
    xturn = !xturn
  }
  console.log(gameboard[0], '|', gameboard[1], '|', gameboard[2])
  console.log(gameboard[3], '|', gameboard[4], '|', gameboard[5])
  console.log(gameboard[6], '|', gameboard[7], '|', gameboard[8])
  return gameboard
}

module.exports = {
  takeTurn,
  winConditions,
  checkForWin
}
