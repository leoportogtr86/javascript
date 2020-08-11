const axios = require('axios')
const cheerio = require('cheerio')


axios.get('https://www.letras.mus.br/aline-barros/1131959/').then((res)=>{
    

    

    const $ = cheerio.load(res.data)


    let letra = $('.cnt-letra').html().replace(/<..>|<...>|<.>/g, '\n')

    console.log(letra)

    
})