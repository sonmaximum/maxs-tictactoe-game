'use strict'

const logic = require('./game_logic.js')
const ui = require('./ui.js')
const api = require('./api.js')
const state = require('./state.js')

let aimove
let validmove = true

const onMove = function (event) {
  if (logic.checks.over) {
    $('#user-feedback-message').text('Game is over!')
    $('#user-feedback-message').css('background-color', 'red')
    $('#game-over-modal').modal('show')
    return
  }
  if ($(event.target).text()) {
    validmove = false
  }
  ui.updateBoard(event.target)
  logic.takeTurn(event.target.id, logic.gameboard)
  logic.checkForWin(logic.gameboard)
  api.updateGame(event.target.id)
    .then(state.onUpdateSuccess)
    .catch(state.onUpdateFailure)
    .then(getComplete)
    .then(getGamesWon)
    .then(takeAImove)
    .then(function () { validmove = true })
}

const takeAImove = function () {
  if (logic.checks.vsai) {
    if (validmove) {
      if (!logic.boardFull(logic.gameboard)) {
        logic.checks.aiturn = true
        while (logic.checks.aiturn) {
          aimove = Math.floor(Math.random() * 9)
          if (!logic.gameboard[aimove]) {
            ui.updateBoard($('#' + aimove))
            logic.takeTurn(aimove, logic.gameboard)
            logic.checkForWin(logic.gameboard)
            api.updateGame(aimove)
              .then(state.onUpdateSuccess)
              .catch(state.onUpdateFailure)
              .then(getComplete)
              .then(getGamesWon)
            logic.checks.aiturn = false
          }
        }
      }
    }
  }
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

const onGameSelector = function (event) {
  event.preventDefault()
  $('#game-type-modal').modal('show')
}

const onNewAIGame = function (event) {
  event.preventDefault()
  logic.checks.vsai = true
  onNewGame(event)
}

const onNewNoAIGame = function (event) {
  event.preventDefault()
  logic.checks.vsai = false
  onNewGame(event)
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
  $('#game-over-form').on('submit', onGameSelector)
  $('#game-type-noai-form').on('submit', onNewNoAIGame)
  $('#game-type-ai-form').on('submit', onNewAIGame)
}

module.exports = {
  addHandlers,
  getAll,
  getComplete,
  getGamesWon
}
