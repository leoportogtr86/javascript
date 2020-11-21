let titulo = document.getElementById('titulo')
let paragrafos = document.getElementsByTagName('p')

//paragrafos não é um array e sim um HTML collection, para manipulacao
//dele como array, precisamos transformá-lo em array

Array.from(paragrafos).forEach((e) => {

    console.log(e.innerHTML)
})

titulo.onmouseover = function () {

    titulo.classList.add('vermelho-centro')

}