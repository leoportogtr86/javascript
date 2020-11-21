let titulo = document.getElementById('titulo')
let paragrafos = document.getElementsByTagName('p')
let par = document.getElementsByClassName('par')
let impar = document.getElementsByClassName('impar')


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
