'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#user-feedback-message').text('Signed up successfully')
  $('#user-feedback-message').css('background-color', 'lightgreen')
  console.log('response is', data)
}

const signUpFailure = function (error) {
  $('#user-feedback-message').text('Error on sign up')
  $('#user-feedback-message').css('background-color', 'red')
  console.error('error is', error)
}

const signInSuccess = function (data) {
  console.log(data)
  $('#user-feedback-message').text('Signed in successfully')
  $('#user-feedback-message').css('background-color', 'lightgreen')
  store.user = data.user
  $('#sign-in').find('input:not([type="submit"])').val('')
}

const signInFailure = function (error) {
  console.error(error)
  $('#user-feedback-message').text('Error on signing in')
  $('#user-feedback-message').css('background-color', 'red')
}

const changePasswordSuccess = function () {
  console.log('password changed successfully')
  $('#user-feedback-message').text('Changed Password successfully')
  $('#user-feedback-message').css('background-color', 'lightgreen')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#user-feedback-message').text('Error on changing password')
  $('#user-feedback-message').css('background-color', 'red')
}
const signOutSuccess = function () {
  console.log('Signed out successfully')
  $('#user-feedback-message').text('Signed out successfully')
  $('#user-feedback-message').css('background-color', 'lightgreen')
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#user-feedback-message').text('Error on signing out')
  $('#user-feedback-message').css('background-color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
