'use strict'
const logic = require('./game_logic.js')

const updateBoard = function (event) {
  if (!logic.checks.over && !$(event.target).text()) {
    if (logic.checks.xturn) {
      $(event.target).text(logic.x).addClass('blue-x')
    } else {
      $(event.target).text(logic.o).addClass('red-o')
    }
  }
}

module.exports = {
  updateBoard
}
