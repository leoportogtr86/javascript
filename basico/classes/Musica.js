class Musica {

    constructor(titulo, autor) {

        this.titulo = titulo
        this.autor = autor

    }

    getTitulo() {

        return this.titulo
    }

    getAutor() {

        return this.autor
    }
}


let m1 = new Musica("Que País é Esse?", "Renato Russo")

console.log(m1)

console.log(typeof m1)
console.log(typeof Musica)

console.log(m1.getTitulo())
console.log(m1.getAutor())