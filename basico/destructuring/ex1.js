const funcionario = require('./funcionario.json')


const { nome, empresa, funcao, dataInicio, salario } = funcionario


console.log(nome)


const { nome: nomeCompleto, empresa: firma, funcao: cargo } = funcionario

console.log(nomeCompleto, firma, cargo)

const { tecnologias } = funcionario

console.log(tecnologias)
