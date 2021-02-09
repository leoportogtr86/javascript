const axios = require('axios')



axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then((res) => {

    const dados = res.data

    dados.forEach(element => {

        console.log(element)

    });

})