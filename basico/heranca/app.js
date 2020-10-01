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

Object.setPrototypeOf(ferrari, c1)


ferrari.setMarca('ferrari')
ferrari.setModelo('f40')
ferrari.setPreco(789000)
ferrari.setCor('vermelha')
ferrari.setVel_max(340)
console.log('--------------------------------------------')

console.log(ferrari.toString());