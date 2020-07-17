const axios = require('axios')

//chamada ajax para criar as estatisticas de assiduidade de alunos de determinado pro

axios.get('https://chamadaescolademusica.herokuapp.com/joyce_aulas').then((res)=>{

    let estatisticas = {

        total: res.data.length,
        presencas: 0,
        faltas: 0,
        porcentagem_assiduidade: 0 

    }

    

    let presenca = res.data.filter((e)=>{

        return e.presenca == 'sim ✅'
    })

    let falta = res.data.filter((e)=>{

        return e.presenca == 'nao ❌'
    })

    estatisticas.presencas = presenca.length
    estatisticas.faltas = falta.length

    const aulas = res.data 

    let total_aulas = aulas
    let faltas = total_aulas.filter((e)=>{

        return e.presenca == 'nao ❌'
    })

    estatisticas.porcentagem_assiduidade = ((presenca.length/total_aulas.length)*100).toFixed(2) + ' %'

    console.log(estatisticas)

    
})