let h1 = document.getElementsByTagName('h1')


//pegando todos os elementos com tag h1 e jogando dentro de um HTML collection
console.log(h1)


let segundo_h1 = h1[1]

console.log(segundo_h1.innerHTML)


//selecionando elementos via id

let terceiro = document.getElementById('terceiro')

terceiro.innerHTML = 'Trocando o conteúdo do terceiro H1 cujo ID é "terceiro"'

console.log(terceiro.innerHTML)



//selecao por classe
let quarto = document.getElementsByClassName('quarto')[0]

console.log(quarto.innerHTML)

//selecionando todos os h1 e transformando num array para manipular todos simultaneamente
Array.from(h1).forEach((e) => {

    e.innerHTML = 'trocando todos os textos dos h1'
    e.style.color = 'blue'
})


//selecionando elementos com a classe "c"
let c = document.getElementsByClassName('c')

console.log(c[0].innerHTML)