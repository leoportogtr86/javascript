const axios = require('axios')
const cheerio = require('cheerio')


//ajax pra pegar uma lista de músicas de um artista

axios.get('https://www.letras.mus.br/aline-barros/').then((res)=>{

    const $ = cheerio.load(res.data)

    let array = $('.cnt-list-row').text().split('  ')

    console.log(array)

    for (let i = 0; i < array.length; i++){

        axios.get('cifraclub.com.br/aline-barros/' + array[i].replace(/ /g, '-')).then((res2)=>{

            console.log(res.data)
        })
    }



})