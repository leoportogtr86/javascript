const axios = require('axios')

axios.get('https://bibleapi.co/api/verses/nvi/sl/23/1').then((res) => {

    console.log(res.data)


})