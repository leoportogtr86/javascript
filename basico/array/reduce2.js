const axios = require('axios')

axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then((res) => {



    const funcionarios = res.data
    const brasileiros = funcionarios.filter((e) => {

        return e.pais == 'Brazil'
    })

    let salarios_brasileiros = brasileiros.map((e) => {

        return e.salario
    })

    let total_salarios_brasileiros = salarios_brasileiros.reduce((a, b) => {

        return a + b


    }, 0)



    console.log(`Soma total dos salários dos brasileiros: ${total_salarios_brasileiros.toFixed(2)}`)






})