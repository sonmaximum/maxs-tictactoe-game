'use strict'

const addHandlers = () => {
  $('[class^=space').on('click', function (event) {
    console.log((event.target).className)
  })
}

module.exports = {
  addHandlers
}
