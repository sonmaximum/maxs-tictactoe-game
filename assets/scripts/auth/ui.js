'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-up-form').find('input:not([type="submit"])').val('')
  $('#sign-up-success').modal('show')
}

const signUpFailure = function (error) {
  $('#user-feedback-message').text('Error on sign up')
  $('#user-feedback-message').css('background-color', 'red')
  console.error('error is', error)
  $('#sign-up-form').find('input:not([type="submit"])').val('')
  $('#sign-up-failure').modal('show')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.init').css('visibility', 'visible')
  $('.board').css('visibility', 'hidden')
  $('.instructions').css('visibility', 'hidden')
  $('.maincontent').css('display', 'flex')
  $('.hideloggedin').hide()
  $('#username').text(data.user.email)
  $('#sign-in-form').find('input:not([type="submit"])').val('')
  // $('#sign-in-success').modal('show')
}

const signInFailure = function (error) {
  console.error(error)
  $('#user-feedback-message').text('Error on signing in')
  $('#user-feedback-message').css('background-color', 'red')
  $('#sign-in-form').find('input:not([type="submit"])').val('')
  $('#sign-in-failure').modal('show')
}

const changePasswordSuccess = function () {
  console.log('password changed successfully')
  $('#user-feedback-message').text('Changed Password successfully')
  $('#user-feedback-message').css('background-color', 'lightgreen')
  $('#change-password-form').find('input:not([type="submit"])').val('')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#user-feedback-message').text('Error on changing password')
  $('#user-feedback-message').css('background-color', 'red')
  $('#change-password-form').find('input:not([type="submit"])').val('')
}
const signOutSuccess = function () {
  $('#logout-success').modal('show')
  $('.hideloggedin').show()
  $('.init').css('visibility', 'hidden')
  $('.board').css('visibility', 'hidden')
  $('.instructions').css('visibility', 'hidden')
  $('.maincontent').css('display', 'none')
  $('.user-feedback-message').css('visibility', 'hidden')
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
