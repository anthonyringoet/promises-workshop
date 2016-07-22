'use strict'

// ONE
// ---------
const promise = new Promise(function (fulfill, reject) {
  fulfill('ONE')
})

promise.then(console.log)

// same as above
console.log(Promise.resolve('ONE'))

// ERROR
// ---------
const err = new Promise(function (fulfill, reject) {
  reject(new Error('wrong'))
})

// same as above
console.error(Promise.reject(new Error('wrong')))

// catch
promise.then(null, function (err) {
  console.error(err.message)
})

// direct catch
promise.catch(function (err) {
  console.error(err.message)
})
