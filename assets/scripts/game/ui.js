'use strict'
const logic = require('./game_logic.js')

const updateBoard = function (event) {
  if (!logic.checks.over && !$(event.target).text()) {
    if (logic.checks.xturn) {
      $(event.target).text(logic.x)
    } else {
      $(event.target).text(logic.o)
    }
  }
}

module.exports = {
  updateBoard
}
