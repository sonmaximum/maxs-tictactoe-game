'use strict'

let checkboard

const emptygameboard =
  [
    '', '', '',
    '', '', '',
    '', '', ''
  ]

const gameboard = emptygameboard.slice()

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
  return (checkboard[a] === x && checkboard[b] === x && checkboard[c] === x)
}
const checkThreeForWinO = function ([a, b, c]) {
  return (checkboard[a] === o && checkboard[b] === o && checkboard[c] === o)
}

const checkForWinX = function (board) {
  checkboard = board
  return winConditions.some(checkThreeForWinX)
}
const checkForWinO = function (board) {
  checkboard = board
  return winConditions.some(checkThreeForWinO)
}

const boardFull = function (gameboard) {
  return gameboard.every(elem => elem)
}

const o = 'O'
const x = 'X'
const checks = {
  xturn: true,
  over: false
}

const takeTurn = function (index, gameboard) {
  if (checks.over) {
    return
  }
  if (gameboard[index] === '') {
    if (checks.xturn) {
      gameboard[index] = x
    } else {
      gameboard[index] = o
    }
    checks.xturn = !checks.xturn
    return gameboard
  }
}

const checkForWin = function (gameboard) {
  if (checkForWinX(gameboard)) {
    checks.over = true
    $('#user-feedback-message').text('X wins!')
    $('#user-feedback-message').css('background-color', 'lightblue')
    $('#xwin').modal('show')
  } else if (checkForWinO(gameboard)) {
    checks.over = true
    $('#user-feedback-message').text('O wins!')
    $('#user-feedback-message').css('background-color', 'lightcoral')
    $('#owin').modal('show')
  } else if (boardFull(gameboard)) {
    checks.over = true
    $('#user-feedback-message').text('Draw!')
    $('#user-feedback-message').css('background-color', 'lightgrey')
    $('#draw').modal('show')
  }
}

module.exports = {
  takeTurn,
  x,
  o,
  checks,
  emptygameboard,
  checkForWin,
  checkForWinX,
  gameboard
}
