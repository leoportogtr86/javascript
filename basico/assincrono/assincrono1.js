//refrencia
//https://www.youtube.com/watch?v=7Bs4-rqbCQc&t=117s

const fs = require('fs')




console.log(1)


//ira processar todos os comandos de console.log primeiro
//nao bloqueia a thread principal

fs.readFile('./doc/arquivo.txt', (err, res) => {

    if (err) {

        console.log(err)

    } else {

        console.log(res.toString())
    }


})



console.log(2)



console.log(3)