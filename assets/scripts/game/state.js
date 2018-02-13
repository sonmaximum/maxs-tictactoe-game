'use strict'

const store = require('../store')

const onCreateGameSuccess = function (response) {
  store.game = response.game
  $('#user-feedback-message').text('Currently: X\'s turn')
  $('#user-feedback-message').css('background-color', 'white')
  $('.board, .instructions, .user-feedback-message').css('visibility', 'visible')
}

const onCreateGameFailure = function (error) {
  store.error = error
  $('#generic-failure').modal('show')
}

const onUpdateSuccess = function (response) {
  store.game = response.game
}

const onUpdateFailure = function (error) {
  store.error = error
  $('#generic-failure').modal('show')
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateSuccess,
  onUpdateFailure
}
