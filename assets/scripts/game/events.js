'use strict'

const logic = require('./game_logic.js')
const ui = require('./ui.js')

const addHandlers = () => {
  $('.space').on('click', function (event) {
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
  })
}

module.exports = {
  addHandlers
}
