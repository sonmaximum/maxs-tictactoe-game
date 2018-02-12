'use strict'

const store = require('../store')

const onCreateGameSuccess = function (response) {
  store.game = response.game
  $('#user-feedback-message').text('Currently: X\'s turn')
  $('#user-feedback-message').css('background-color', 'white')
  $('.board').css('visibility', 'visible')
  $('.instructions').css('visibility', 'visible')
  $('.user-feedback-message').css('visibility', 'visible')
}

const onCreateGameFailure = function (error) {
  store.error = error
}

const onUpdateSuccess = function (response) {
  store.game = response.game
}

const onUpdateFailure = function (error) {
  store.error = error
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateSuccess,
  onUpdateFailure
}
