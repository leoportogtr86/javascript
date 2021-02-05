const funcionario = {

    nome: "Leonardo Porto",
    empresa: "WiseUp",
    funcao: "desenvolvedor frontend react js",
    salario: 8000,
    tecnologias: ['node js', 'react js', 'next js', 'html', 'css', 'mongodb', 'express', 'grapghql'],
    dataInicio: '01/04/2021'
}


const { nome, empresa, funcao, dataInicio, tecnologias, salario } = funcionario


console.log(nome)


const { nome: nomeCompleto, empresa: firma, funcao: cargo } = funcionario

console.log(nomeCompleto, firma, cargo)