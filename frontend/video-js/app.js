const axios = require('axios')
const cheerio = require('cheerio')

axios.get('https://pt.savefrom.net/10/#url=https:/www.youtube.com/watch?noredirect=1&v=A0naU1p8g8A&v=A0naU1p8g8A').then((res) => {

    const $ = cheerio.load(res.data)

    let link = $('div .def-btn-box').html()
    console.log($)
})