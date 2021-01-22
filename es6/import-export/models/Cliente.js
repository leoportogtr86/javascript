export default function Cliente(nome, idade) {


    this.nome = nome
    this.idade = idade

    this.falar = function () {


        return 'Oi meu nome é ' + nome

    }

}