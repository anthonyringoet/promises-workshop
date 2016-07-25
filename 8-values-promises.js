'use strict'

function attachTitle (name) {
  return `DR. ${name}`
}

const firstPromise = new Promise(function (fulfill, reject) {
  return fulfill('MANHATTAN')
})

firstPromise
  .then(attachTitle)
  .then(console.log)
