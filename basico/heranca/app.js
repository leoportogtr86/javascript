//referencias
//https://medium.com/trainingcenter/heran%C3%A7a-e-prot%C3%B3tipos-no-javascript-2c1e60e005a2
//https://www.udemy.com/course/curso-web/learn/lecture/9053628#overview

const Carro = require('./entities/carro')

let c1 = new Carro()

c1.setMarca('fiat')
c1.setModelo('uno')
c1.setCor('branco')
c1.setPreco(35000)
c1.setVel_max(180)

console.log(c1.toString())
console.log(c1.__proto__)


//objeto que herda de Carro

let ferrari = {}

//outra forma de estabelecer ligacao com seu prototipo=>
//ferrari herda de c1
Object.setPrototypeOf(ferrari, c1)


ferrari.setMarca('ferrari')
ferrari.setModelo('f40')
ferrari.setPreco(789000)
ferrari.setCor('vermelha')
ferrari.setVel_max(340)
console.log('--------------------------------------------')

console.log(ferrari.toString());



//outra forma de criar um objeto que herde de seu prototipo
let pai = { nome: 'José', idade: 56, cor_cabelo: 'preto' }

let filho = Object.create(pai)


//agora na criacao do objeto, ja passamos os seus atributos como segundo parametro
let filha = Object.create(pai, {

    nome: {
        value: 'Joana',
        writable: false,
        enumerable: true
    },

    idade: {
        value: 15,
        writable: false,
        enumerable: true
    }
})

filho.nome = 'Bill'
filho.idade = 10

console.log(`${filha.nome} tem ${filha.idade} anos.`)