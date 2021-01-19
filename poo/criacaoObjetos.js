//notacao literal

let carro = {

    marca: 'Land Rover',
    modelo: 'Range Rover Evoque',
    cor: 'branco',
    preco: 300000
}

console.log(carro)


//instanciando via Object

const guitarra = new Object({

    marca: 'suhr',
    preco: 7900,
    cor: 'preta'
})


console.log(guitarra)



//funcao construtora

function Smartphone(marca, modelo, preco, cor) {

    //atributos publicos

    this.marca = marca
    this.modelo = modelo
    this.preco = preco
    this.cor = cor

    this.ligar = function () {

        console.log('Alô!')

    }

    this.enviarMensagem = (mensagem) => {

        return mensagem
    }

}

//instanciando o objeto

let iphone12 = new Smartphone('apple', 'iphone12', 7999, 'azul')

console.log(iphone12)


console.log(iphone12.enviarMensagem('Bom dia...'))