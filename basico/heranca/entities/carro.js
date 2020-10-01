let Carro = function() {

    let marca
    let modelo
    let cor
    let preco
    let vel_max

    this.getMarca = function() {

        return marca
    }

    this.setMarca = function(_marca) {

        marca = _marca

    }

    //--------------------------------------------------


    this.getModelo = function() {

        return modelo
    }

    this.setModelo = function(_modelo) {

        modelo = _modelo

    }

    //--------------------------------------------------


    this.getCor = function() {

        return cor
    }

    this.setCor = function(_cor) {

        cor = _cor

    }

    //--------------------------------------------------


    this.getPreco = function() {

        return preco
    }

    this.setPreco = function(_preco) {

        preco = _preco

    }

    //--------------------------------------------------


    this.getVel_max = function() {

        return vel_max
    }

    this.setVel_max = function(_vel_max) {

        vel_max = _vel_max

    }

    //--------------------------------------------------

    this.andar = function() {
        console.log('vrummmm')
    }

    this.frear = function() {

        console.log('stop')

    }

    this.toString = function() {

        return `Marca: ${marca}\nModelo: ${modelo}\nCor: ${cor}\nPreço: ${preco}\nVelocidade Máxima: ${vel_max}`

    }
}

module.exports = Carro