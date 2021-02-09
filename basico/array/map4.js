const axios = require('axios')


axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then((res) => {

    const dados = res.data

    let nomes = dados.map((e) => {

        return e.nome
    })

    console.log(nomes)
})





