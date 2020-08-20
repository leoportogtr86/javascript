class Pessoa {

    constructor(nome){

        this.nome = nome


    }

    falar(){

        return this.nome
    }
}

const pessoa0 = new Pessoa('Roberta')

console.log(pessoa0.falar())

const pessoa = nome =>{

    return{

        nome
    }
}

console.log(pessoa('Bruno'))