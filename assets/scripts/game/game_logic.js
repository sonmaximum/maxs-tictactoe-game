'use strict'
const store = require('../store.js')
let gameboard
let checkboard

const emptygameboard =
  [
    '', '', '',
    '', '', '',
    '', '', ''
  ]

if (store.game) {
  gameboard = store.game.cells
} else {
  gameboard = emptygameboard
}

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

const checkForWinX = function (board) {
  checkboard = board
  return winConditions.some(checkThreeForWinX)
}

const checkForWinO = function (board) {
  checkboard = board
  return winConditions.some(checkThreeForWinO)
}

const checkThreeForWinX = function ([a, b, c]) {
  return (checkboard[a] === x && checkboard[b] === x && checkboard[c] === x)
}
const checkThreeForWinO = function ([a, b, c]) {
  return (checkboard[a] === o && checkboard[b] === o && checkboard[c] === o)
}

const boardFull = function () {
  return gameboard.every(elem => elem)
}
const o = 'O'
const x = 'X'
const checks = {
  xturn: true,
  over: false
}
const takeTurn = function (index) {
  if (checks.over) {
    console.log('Game is over!')
    return 'Game is over!'
  }
  if (gameboard[index] === '') {
    if (checks.xturn) {
      gameboard[index] = x
    } else {
      gameboard[index] = o
    }
    checks.xturn = !checks.xturn
    console.log(gameboard[0], '|', gameboard[1], '|', gameboard[2])
    console.log(gameboard[3], '|', gameboard[4], '|', gameboard[5])
    console.log(gameboard[6], '|', gameboard[7], '|', gameboard[8])
    return gameboard
  }
}

const checkForWin = function () {
  if (checkForWinX(gameboard)) {
    checks.over = true
    console.log('X wins!')
    $('#user-feedback-message').text('X wins!')
    $('#user-feedback-message').css('background-color', 'lightblue')
    return 'X wins!'
  } else if (checkForWinO(gameboard)) {
    checks.over = true
    console.log('0 wins!')
    $('#user-feedback-message').text('O wins!')
    $('#user-feedback-message').css('background-color', 'lightcoral')
    return 'O wins!'
  } else if (boardFull()) {
    checks.over = true
    console.log('Draw!')
    $('#user-feedback-message').text('Draw!')
    $('#user-feedback-message').css('background-color', 'lightgrey')
    return 'Draw!'
  }
}

module.exports = {
  takeTurn,
  x,
  o,
  checks,
  emptygameboard,
  fullgameboard,
  testgameboard,
  checkForWin,
  checkForWinX
}
