const axios = require('axios')
const cheerio = require('cheerio')




axios.get('https://www.pokemon.com/br/pokedex/pichu').then((res)=>{

    const $ = cheerio.load(res.data)

    let pokemon = {

        name: $('.pokedex-pokemon-pagination-title div').text().replace(/\n | |Nº|\d/gi, ''),
        description: $('.version-descriptions p').text().replace(/\n|  /gi, ''),
        type: $('.dtm-type').text().replace(/\n|\t|type| /gi, ''),
        evolutions: $('.evolution-profile h3').text().replace(/\n|  |Nº|\d/gi, '').split(' ')
    }


    console.log(pokemon)
})