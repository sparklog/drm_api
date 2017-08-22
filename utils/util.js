
const bcrypt = require('bcrypt');
const fs = require('fs')


function hash(password) {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, 10, (err, hash) => {
      // Store hash in database
        if(err)
          reject(err)
        else
          resolve(hash)
      })
  })
}

function unlink(path) {
  return new Promise((resolve, reject) => {
    fs.unlink(path, err => {
      if(err) reject(err)
      else resolve()
    })
  })
}

module.exports = {
  hash,
  unlink
}