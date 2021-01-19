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



//funcao construtora com atributos publicos e privados

function Notebook(marca, modelo) {


    this.marca = marca
    this.modelo = modelo
    let preco
    let descricao


    this.getPreco = () => {

        return preco
    }


    this.setPreco = (p) => {

        preco = p

    }



    this.getDescricao = () => {

        return descricao
    }


    this.setDescricao = (d) => {

        descricao = d

    }

}


//instanciando objeto

let macbook = new Notebook('apple', 'macbook air')

macbook.setPreco(12999)
macbook.setDescricao('Com o chip M1 da Apple, nosso notebook mais fino e leve ficou irreconhecível. Por dentro. A CPU e a GPU estão mais rápidas, até 3,5 vezes e até cinco vezes, respectivamente. Nosso Neural Engine mais avançado deixa o aprendizado de máquina até nove vezes mais veloz. A bateria oferece mais tempo de duração. E trocamos a ventoinha pelo silêncio. Nunca tanto desempenho esteve reunido em um MacBook Air.')


console.log(macbook.getPreco())