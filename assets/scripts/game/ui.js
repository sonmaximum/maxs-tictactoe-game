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
      $('#user-feedback-message').text('O\'s turn')
      $('#user-feedback-message').css('background-color', 'white')
    } else {
      $(event.target).text(logic.o).addClass('red-o')
      $('#user-feedback-message').text('X\'s turn')
      $('#user-feedback-message').css('background-color', 'white')
    }
  }
}

module.exports = {
  updateBoard
}
