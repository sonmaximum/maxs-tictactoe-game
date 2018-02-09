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
}

const onCreateGame = function (event) {
  event.preventDefault()
  api.createGame()
    .then(state.onCreateGameSuccess)
    .catch(state.onCreateGameFailure)
}

const addHandlers = () => {
  $('.space').on('click', onMove)
  $('#create-game').on('submit', onCreateGame)
}

module.exports = {
  addHandlers
}
