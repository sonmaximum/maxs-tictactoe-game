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
    token = logic.x
  } else {
    token = logic.o
  }
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

const getGames = function (param) {
  return $.ajax({
    url: config.apiOrigin + '/games' + param,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGame,
  updateGame,
  getGames
}
