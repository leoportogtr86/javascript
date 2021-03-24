Object.prototype.sysout = function () {

    console.log(this.toString())
}


let frase = "Javascript é melhor que java : )!"

frase.sysout()