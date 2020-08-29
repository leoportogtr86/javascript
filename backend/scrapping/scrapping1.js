const axios = require('axios')
const cheerio = require('cheerio')


axios.get('https://pt.wikipedia.org/wiki/The_Umbrella_Academy_(s%C3%A9rie_de_televis%C3%A3o)').then((res)=>{

    // console.log(res.data)

    const $ = cheerio.load(res.data)

    



    let cast = $('tbody tr td a').text()

    console.log(cast)






})