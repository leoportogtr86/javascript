const axios = require('axios')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

require('dotenv/config')

//https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/

axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then((res) => {

    const dados = res.data

    let mulheres = dados.filter((e) => {

        return e.genero === 'F'
    })
    let homens = dados.filter((e) => {

        return e.genero === 'M'
    })




})


console.log(process.env.NOME)


