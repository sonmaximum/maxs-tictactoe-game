'use strict'

const logic = require('./game_logic.js')
const ui = require('./ui.js')
const api = require('./api.js')
const state = require('./state.js')

const onMove = function (event) {
  if (logic.checks.over) {
    $('#user-feedback-message').text('Game is over!')
    $('#user-feedback-message').css('background-color', 'red')
    return
  }
  ui.updateBoard(event)
  logic.takeTurn(event.target.id, logic.gameboard)
  logic.checkForWin(logic.gameboard)
  api.updateGame(event.target.id)
    .then(state.onUpdateSuccess)
    .catch(state.onUpdateFailure)
    .then(getComplete)
    .then(getGamesWon)
}

const getAll = function () {
  api.getGames('')
    .then(ui.onGetAllGamesSuccess)
    .catch(ui.onGetAllGamesFailure)
}

const getComplete = function () {
  api.getGames('?over=true')
    .then(ui.onGetCompleteSuccess)
    .catch(ui.onGetCompleteFailure)
}

const getGamesWon = function () {
  api.getGames('?over=true')
    .then(ui.onGetGamesWonSuccess)
    .catch(ui.onGetGamesWonFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  $('.board').removeClass('init')
  logic.checks.xturn = true
  logic.checks.over = false
  $('.space').text('').removeClass().addClass('space')
  logic.gameboard = logic.emptygameboard.slice()
  api.createGame()
    .then(state.onCreateGameSuccess)
    .catch(state.onCreateGameFailure)
    .then(getAll)
}

const addHandlers = () => {
  $('.space').on('click', onMove)
  $('#new-game').on('submit', onNewGame)
}

module.exports = {
  addHandlers,
  getAll,
  getComplete,
  getGamesWon
}
