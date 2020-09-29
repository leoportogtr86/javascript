const axios = require('axios')
const fs = require('fs')

axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then((res) => {



    let array = res.data

    let nomes = []
    let emails = []
    let paises = []

    array.map((e) => {

        nomes.push(e.nome)
        emails.push(e.email)
        paises.push(e.pais)
    })

    console.log('Nomes---------------------------------------------------------')
    console.log(nomes)

    console.log('Emails---------------------------------------------------------')
    console.log(emails)

    console.log('Países---------------------------------------------------------')
    console.log(paises)

    fs.writeFile('./data/nomes.txt', nomes, err => {

        if (err) {

            console.log(err)

        } else {

            console.log('Nomes salvos com sucesso!')
        }
    })


    fs.writeFile('./data/emails.txt', emails, err => {

        if (err) {

            console.log(err)

        } else {

            console.log('Emails salvos com sucesso!')
        }
    })


    fs.writeFile('./data/paises.txt', paises, err => {

        if (err) {

            console.log(err)

        } else {

            console.log('Países salvos com sucesso!')
        }
    })



})