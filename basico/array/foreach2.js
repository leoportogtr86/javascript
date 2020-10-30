const axios = require('axios')


axios.get('https://chamadaescolademusica.herokuapp.com/debora_aulas').then((res) => {

    let todas = res.data
    // console.log(todas)

    todas.forEach(element => {

        console.log(element)

    });
})