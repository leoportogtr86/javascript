export default function QuadradoColorido(element, lado, cor) {


    this.lado = lado
    this.cor = cor



    document.querySelector(element).style.width = lado + 'px'
    document.querySelector(element).style.height = lado + 'px'
    document.querySelector(element).style.borderRadius = '10px'

    document.querySelector(element).style.backgroundColor = cor

    this.trocaCor = function (color) {

        document.querySelector(element).style.backgroundColor = color
    }

    this.trocaTamanho = function (novoLado) {

        document.querySelector(element).style.width = novoLado + 'px'
        document.querySelector(element).style.height = novoLado + 'px'
    }

    this.posicao = function (x, y) {

        document.querySelector(element).style.top = y + 'px'
        document.querySelector(element).style.left = x + 'px'
        document.querySelector(element).style.position = 'absolute'

    }

}