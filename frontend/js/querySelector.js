//com querySelector e querySelectorAll podemos fazer selecao
//passando como parametros tags, classes e ids

//retornam um nodeList e podemos usar forEach nele, mas nao o map. filter e reduce
let p = document.querySelectorAll('p')

//aqui ele pegara apenas o primeiro p
let primeiro = document.querySelector('p')

console.log(p[2])

let segundoP = document.querySelector('#segundoP')

console.log('Segunda tag "p" => ' + segundoP.innerHTML)