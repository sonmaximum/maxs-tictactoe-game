'use strict'

const config = require('../config')
const store = require('../store')
const logic = require('./game_logic.js')

let token

const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const updateGame = function (id) {
  if (logic.checks.xturn) {
    token = logic.o
  } else {
    token = logic.x
  }
  console.log('it got here')
  console.log('store.game.id is', store.game.id)
  console.log('token is', token)
  console.log('index is', id)
  console.log('over is', logic.checks.over)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: id,
          value: token
        },
        over: logic.checks.over
      }
    }
  })
}

module.exports = {
  createGame,
  updateGame
}
