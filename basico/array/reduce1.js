let numeros = [0, 1, 2, 3, 4, 5]

//iremos somar os elementos desse array

//funcao reduce recebe como parametros:
//callback com os parametros: acumulador e elemento atual (podemos passar o valor inicial tambem, no caso aqui, 0)

console.log(numeros.reduce((a, b) => {

    return a + b

}, 0))