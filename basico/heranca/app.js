const Carro = require('./entities/carro')

let c1 = new Carro()

c1.setMarca('fiat')
c1.setModelo('uno')
c1.setCor('branco')
c1.setPreco(35000)
c1.setVel_max(180)

console.log(c1.toString())
console.log(c1.__proto__)