'use strict'
const logic = require('./game_logic.js')

const updateBoard = function (event) {
  if (logic.checks.over) {
    $('#user-feedback-message').text('Game is over!')
    $('#user-feedback-message').css('background-color', 'red')
  } else if ($(event.target).text()) {
    $('#user-feedback-message').text('Invalid move!')
    $('#user-feedback-message').css('background-color', 'red')
  } else {
    if (logic.checks.xturn) {
      $(event.target).text(logic.x).addClass('blue-x')
      $('#user-feedback-message').text('Currently: O\'s turn')
      $('#user-feedback-message').css('background-color', 'white')
    } else {
      $(event.target).text(logic.o).addClass('red-o')
      $('#user-feedback-message').text('Currently: X\'s turn')
      $('#user-feedback-message').css('background-color', 'white')
    }
  }
}

const onGetAllGamesSuccess = function (response) {
  $('#played').text(response.games.length)
}

const onGetAllGamesFailure = function (error) {
  console.log('error is', error)
}

const onGetCompleteSuccess = function (response) {
  $('#completed').text(response.games.length)
}

const onGetCompleteFailure = function (error) {
  console.log('error is', error)
}

const onGetGamesWonSuccess = function (response) {
  let num = 0
  response.games.forEach((e) => {
    if (logic.checkForWinX(e.cells)) {
      num++
    }
  })
  $('#won').text(num)
}

const onGetGamesWonFailure = function (error) {
  console.log('error is', error)
}

module.exports = {
  updateBoard,
  onGetAllGamesSuccess,
  onGetAllGamesFailure,
  onGetCompleteSuccess,
  onGetCompleteFailure,
  onGetGamesWonSuccess,
  onGetGamesWonFailure
}
