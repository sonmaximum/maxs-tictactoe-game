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
  api.updateGame(event.target.id)
    .then(state.onUpdateSuccess)
    .catch(state.onUpdateFailure)
  logic.checkForWin(logic.gameboard)
}

const onGetAll = function (event) {
  event.preventDefault()
  api.getGames('')
    .then(ui.onGetAllGamesSuccess)
    .catch(ui.onGetAllGamesFailure)
}

const onGetComplete = function (event) {
  event.preventDefault()
  api.getGames('?over=true')
    .then(ui.onGetCompleteSuccess)
    .catch(ui.onGetCompleteFailure)
}

const onGetGamesWon = function (event) {
  event.preventDefault()
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
}

const addHandlers = () => {
  $('.space').on('click', onMove)
  $('#games-played').on('submit', onGetAll)
  $('#games-completed').on('submit', onGetComplete)
  $('#games-won').on('submit', onGetGamesWon)
  $('#new-game').on('submit', onNewGame)
}

module.exports = {
  addHandlers
}
