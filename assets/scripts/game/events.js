'use strict'

const addHandlers = () => {
  $('.space').on('click', function (event) {
    console.log(event.target.id)
  })
}

module.exports = {
  addHandlers
}
