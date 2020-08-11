const axios = require('axios')
const cheerio = require('cheerio')


axios.get('https://www.climatempo.com.br/previsao-do-tempo/cidade/256/joaopessoa-pb').then((res)=>{

    

    const $ = cheerio.load(res.data)

    const min = $('#min-temp-1').text()
    const max = $('#max-temp-1').text()

    console.log('Mínima: ' + min)
    console.log('Máxima: ' + max)
})