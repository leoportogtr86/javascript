const fs = require('fs')




console.log(1)


fs.readFile('./doc/arquivo.txt', (err, res) => {

    if (err) {

        console.log(err)

    } else {

        console.log(res.toString())
    }


})



console.log(2)



console.log(3)