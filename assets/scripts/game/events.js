'use strict'

const logic = require('./game_logic.js')
const ui = require('./ui.js')

const addHandlers = () => {
  $('.space').on('click', function (event) {
    console.log(event)
    console.log(event.target)
    ui.updateBoard(event)
    logic.takeTurn(event.target.id)
  })
}

module.exports = {
  addHandlers
}
