const axios = require('axios')

axios.get('https://chamadaescolademusica.herokuapp.com/debora_aulas').then((res) => {

    // console.log(res.data)

    let data = res.data.filter((e) => {

        return e.data == "20/10"
    })

    console.log(data)

})