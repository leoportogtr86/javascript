function Animal(nome, grupo, numero_patas, reproducao, alimentacao) {

    this.nome = nome
    this.grupo = grupo
    this.numero_patas = numero_patas
    this.reproducao = reproducao
    this.alimentacao = alimentacao

}


let cao = new Animal('cão', 'mamífero', 4, "sexuada", "carnívoro")

delete cao.nome

console.log(cao)

const tobby = {

    nome: "Tobby",
    raca: "vira-lata",
    dono: { nome: "Juca", cpf: 1254756598, idade: 36, nacionalidade: "brasileiro" },
    antigos_donos: [{

        nome: "Rafael",
        idade: 15
    },

    {
        nome: "Júlia",
        idade: 5


    },

    {
        nome: "Thiago",
        idade: 40


    }]
}


console.log(tobby.antigos_donos[0].idade)