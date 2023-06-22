const fs = require('fs')
const path = require('path')
const filePath = path.resolve(`./files/title.md`)

// Parseamos o buffer em string
function callback (data) {
  return data.toString()
}

// Transformamos a função em uma promise
const readFileAsync = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err)
      return resolve(callback(data))
    })
  })
}

(() => {
  readFileAsync(filePath)
    .then(console.log)
    .catch(console.error)
})()
