const Paciente = require('./models/construtora_paciente')

let p2 = new Paciente()


p2.setContato('5555555')
console.log(p2.getContato())

