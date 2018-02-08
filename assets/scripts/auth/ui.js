'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#user-feedback-message').text('Signed up successfully')
  $('#user-feedback-message').css('background-color', 'green')
  console.log('response is', data)
}

const signUpFailure = function (error) {
  $('#user-feedback-message').text('Error on sign up')
  $('#user-feedback-message').css('background-color', 'red')
  console.error('error is', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  store
}
