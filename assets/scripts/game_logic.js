'use strict'

const emptygameboard =
  [
    '', '', '',
    '', '', '',
    '', '', ''
  ]

const gameboard =
  [
    '', '', '',
    '', '', '',
    '', '', ''
  ]

const testgameboard =
  [
    'x', '', 'o',
    'x', 'o', '',
    'x', '', ''
  ]

const fullgameboard =
    [
      'x', 'x', 'o',
      'x', 'o', 'o',
      'x', 'o', 'x'
    ]

// const gameboard = testgameboard

const winConditions =
  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

const checkThreeForWinX = function ([a, b, c]) {
  return (gameboard[a] === x && gameboard[b] === x && gameboard[c] === x)
}
const checkThreeForWinO = function ([a, b, c]) {
  return (gameboard[a] === o && gameboard[b] === o && gameboard[c] === o)
}

const checkForWinX = function () {
  return winConditions.some(checkThreeForWinX)
}

const checkForWinO = function () {
  return winConditions.some(checkThreeForWinO)
}

const boardFull = function () {
  return gameboard.every(elem => elem)
}
const o = 'o'
const x = 'x'
let xturn = true
let over = false
const takeTurn = function (index) {
  if (over) {
    return 'Game is over!'
  }
  if (gameboard[index] === '') {
    if (xturn) {
      gameboard[index] = x
    } else {
      gameboard[index] = o
    }
    xturn = !xturn
  }
  if (checkForWinX()) {
    over = true
    return 'X wins!'
  } else if (checkForWinO()) {
    over = true
    return 'O wins!'
  } else if (boardFull()) {
    over = true
    return 'Draw!'
  }
  console.log(gameboard[0], '|', gameboard[1], '|', gameboard[2])
  console.log(gameboard[3], '|', gameboard[4], '|', gameboard[5])
  console.log(gameboard[6], '|', gameboard[7], '|', gameboard[8])
  return gameboard
}

module.exports = {
  takeTurn
}
