'use strict'

function parsePromised (json) {
  return new Promise(function (fullfill, reject) {
    try {
      fullfill(JSON.parse(json))
    } catch (e) {
      reject(e)
    }
  })
}

parsePromised(process.argv[2])
  .then(null, console.log)
