function linguagens(nome, fortementeTipada) {

    return {

        nome,
        fortementeTipada
    }

}

const java = linguagens('java', true)
const javascript = linguagens('javascript', false)
const csharp = linguagens('c#', true)
const python = linguagens('python', false)

let linguagensDeProgramacao = [java, javascript, csharp, python]

//console.log(linguagensDeProgramacao)

function criarCarro(marca, modelo, velMax, cor, preco) {

    return {

        marca, 
        modelo,
        velMax,
        cor,
        preco
    }
    
}

const gol = criarCarro('wolksvagen', 'gol 1000', 200, 'preto', 15.500)

console.log(gol)