'use strict'

const http = require('q-io/http')

http.read('http://localhost:7000/')
  .then(function (id) {
    const userId = id.toString()
    return http.read(`http://localhost:7001/${userId}`)
  })
  .then(function (json) {
    console.log(JSON.parse(json))
  })
  .then(null, console.error)
  .done()
