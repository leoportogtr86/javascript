const axios = require('axios')

//fazendo uma requisicao ajax para obter uma lista de dados de funcionarios

axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then((res)=>{

    

    let funcionarios = res.data

    let russos = []

    //vamos filtrar e obter os dados de todos os funcionarios russos

    russos = funcionarios.filter((e)=>{

        return e.pais === 'Russia'
    })

    console.log(russos)



})