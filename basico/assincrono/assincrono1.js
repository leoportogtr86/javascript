//refrencia
//https://www.youtube.com/watch?v=7Bs4-rqbCQc&t=117s

const fs = require('fs')




console.log(1)


//criando uma promise


const readFile = file => new Promise((resolve, reject) => {

    fs.readFile(file, (err, res) => {

        if (err) {

            reject(err)
        } else {

            resolve(res)
        }


    })
})


const init = async () => {

    try {

        const res = await readFile('./doc/arquivo.txt')
        console.log(res.toString())


    } catch (err) {

        console.log(err)
    }
}

console.log(init())



//ira processar todos os comandos de console.log primeiro
//nao bloqueia a thread principal

// fs.readFile('./doc/arquivo.txt', (err, res) => {

//     if (err) {

//         console.log(err)

//     } else {

//         console.log(res.toString())
//     }


// })

//

console.log(2)



console.log(3)