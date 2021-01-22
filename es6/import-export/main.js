import Cliente from './models/Cliente.js'
import Carro from './models/Carro.js'


let c1 = new Cliente('Zeca', 45)

console.log(c1.falar())


let carro1 = new Carro('land rover', 'range rover evoque', 345000)

console.log(carro1)
console.log(carro1.andar())