const fs = require('fs')

const readRoot = new Promise((resolve, reject) => {
    return fs.readdir('/', (err, result) => {
        if (err) {
            reject(err)
        }
        resolve(result)
    })

})

readRoot.then(result => console.log(result))
    .catch(err => console.log(err))