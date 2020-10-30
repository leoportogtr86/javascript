const axios = require('axios')

axios.get('https://chamadaescolademusica.herokuapp.com/debora_aulas').then((res) => {

    let rafael = res.data.filter((e) => {

        return e.nome == "Rafael Medeiros" && e.presenca == "nao ❌"
    })

    console.log(rafael)

})