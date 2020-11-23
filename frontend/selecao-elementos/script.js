let titulo = document.getElementById('titulo')
let paragrafos = document.getElementsByTagName('p')
let par = document.getElementsByClassName('par')
let impar = document.getElementsByClassName('impar')
let h2s = document.querySelector('h2')
let todosH2 = document.querySelectorAll('h2')
let primeiro_h2 = document.querySelector('#primeiro_h2')

//paragrafos não é um array e sim um HTML collection, para manipulacao
//dele como array, precisamos transformá-lo em array

Array.from(paragrafos).forEach((e) => {

    console.log(e.innerHTML)
})

titulo.onmouseover = function () {

    titulo.classList.add('vermelho-centro')

}

Array.from(par).forEach((e) => {

    e.style.color = 'blue'
    e.style.fontWeight = 'bold'
})


Array.from(impar).forEach((e) => {

    e.style.color = 'red'
    e.style.fontWeight = 'bold'
    e.style.fontSize = '40px'
})

//seleciona apenas o primeiro elemento da tag h2
console.log(h2s.innerHTML)


//para selecionar todos os elementos com a tag h2
//precisamos usar o querySelectorAll (nodeList)
todosH2.forEach((e) => {

    console.log(e.innerHTML)
})

console.log(primeiro_h2.innerHTML)