'use strict'

const store = require('../store')

const onCreateGameSuccess = function (response) {
  console.log('response is', response)
  store.game = response.game
  console.log('stored game is', store.game)
}

const onCreateGameFailure = function (error) {
  console.log('error is', error)
}

module.exports = {
  onCreateGameSuccess,
  onCreateGameFailure
}
