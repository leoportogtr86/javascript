//literal

const carro = {

    nome: "gol",
    marca: "volkswagen"
}


//object

const carro2 = new Object

carro2.nome = "punto"
carro2.marca = "fiat"

console.log(carro2)


//funcao construtora

function Car(nome, preco, qtde) {

    //usamos o this para que o atributo seja publico
    //para atrr privados, usar let ou const

    this.nome = nome
    this.preco = preco
    this.qtde = qtde

    this.precoComDesconto = ()=>{

        return this.preco -this.preco*0.1
    }
    
}

const carro3 = new Car()



carro3.nome = 'hb20'
carro3.preco = 35000
carro3.qtde = 5

console.log(carro3.precoComDesconto())

//funcao factory


