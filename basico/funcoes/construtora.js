function Carro(velMax = 200, delta = 5) {

    let velAtual = 0

    this.acelerar = function () {

        if (velAtual <= velMax){

            velAtual += delta

        } else {

            velAtual = velMax

            console.log('valor limite!!')
        }
        
    }

    this.getVelAtual = function () {

        
        return velAtual
        
    }    
}

const fordKa = new Carro()

fordKa.acelerar()


console.log(fordKa.getVelAtual())