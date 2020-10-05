const axios = require('axios')

axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json').then((res) => {


    let funcionarios = res.data

    let chineses = funcionarios.filter((e) => {

        return e.pais == 'China'
    })

    let id_chineses = chineses.map((e) => {

        return e.id
    })

    let nome_chineses = chineses.map((e) => {

        return e.nome
    })

    //nomes dos chineses em ordem alfabetica
    // console.log(nome_chineses.sort())


    //todas as russas da lista

    let russas = funcionarios.filter((e) => {

        return e.pais == 'Russia' && e.genero == 'F'
    })

    let nomes_russas = russas.map((e) => {

        return e.nome
    })

    let salarios_russas = russas.map((e) => {

        return e.salario
    })

    // console.log(salarios_russas)

    function maior(a, b) {

        return a - b

    }

    console.log(salarios_russas.sort(maior)[salarios_russas.lenght - 1])

    let maior_salario_russa = salarios_russas.sort(maior)[salarios_russas.length - 1]

    // console.log('A russa com maior salário recebe ' + maior_salario_russa)

    let russa_maior_salario = russas.filter((e) => {

        return e.salario == 21401.31
    })

    console.log(`O nome da russa com o maior salário é ${russa_maior_salario.map((e) => { return e.nome })}`)



})