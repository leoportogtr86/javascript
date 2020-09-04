class Pais {

    constructor (nome, continente, idioma, hino){

        this.nome = nome
        this.continente = continente
        this.idioma = idioma
        this.hino = hino
    }

    cantar_hino(){


        return this.hino
    }

}

const brasil = new Pais('Brasil', 'América do Sul', 'português', 'ouviram do Ipiranga...')


console.log(brasil.cantar_hino())

