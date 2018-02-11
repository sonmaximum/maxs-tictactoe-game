'use strict'

const store = require('../store')

const onCreateGameSuccess = function (response) {
  console.log('response is', response)
  store.game = response.game
  console.log('stored game is', store.game)
  $('#user-feedback-message').text('Currently: X\'s turn')
  $('#user-feedback-message').css('background-color', 'white')
  $('.board').css('visibility', 'visible')
  $('.instructions').css('visibility', 'visible')
  $('.user-feedback-message').css('visibility', 'visible')
}

const onCreateGameFailure = function (error) {
  console.log('error is', error)
}

const onUpdateSuccess = function (response) {
  console.log('response is', response)
  store.game = response.game
  console.log('stored game is', store.game)
}

const onUpdateFailure = function (error) {
  console.log('error is', error)
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure,
  onUpdateSuccess,
  onUpdateFailure
}
