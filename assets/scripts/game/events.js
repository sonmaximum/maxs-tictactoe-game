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
  console.log(event)
  console.log(event.target)
  ui.updateBoard(event)
  logic.takeTurn(event.target.id)
  logic.checkForWin()
  api.updateGame(event.target.id)
    .then(state.onUpdateSuccess)
    .catch(state.onUpdateFailure)
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(state.onCreateGameSuccess)
    .catch(state.onCreateGameFailure)
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

const addHandlers = () => {
  $('.space').on('click', onMove)
  $('#create-game').on('submit', onCreateGame)
  $('#games-played').on('submit', onGetAll)
  $('#games-completed').on('submit', onGetComplete)
  $('#games-won').on('submit', onGetGamesWon)
}

module.exports = {
  addHandlers
}
