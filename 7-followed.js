'use strict'

first().then(function onFulfilled (secret) {
  return second(secret)
}).then(function (result) {
  console.log(result)
})
