'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#sign-up-form').find('input:not([type="submit"])').val('')
  $('#sign-up-success').modal('show')
}

const signUpFailure = function (error) {
  $('#sign-up-form').find('input:not([type="submit"])').val('')
  $('#sign-up-failure').modal('show')
  store.error = error
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
  $('#sign-in-form').find('input:not([type="submit"])').val('')
  $('#sign-in-failure').modal('show')
  store.error = error
}

const changePasswordSuccess = function () {
  $('#change-password-form').find('input:not([type="submit"])').val('')
  $('#change-password-success').modal('show')
}

const changePasswordFailure = function (error) {
  $('#change-password-form').find('input:not([type="submit"])').val('')
  $('#change-password-failure').modal('show')
  store.error = error
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
  $('#generic-failure').modal('show')
  store.error = error
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
