let info = document.getElementById("info")
let titulo = document.getElementById("titulo")
let atributo = document.getElementsByClassName("atributo")
let metodo = document.getElementsByClassName("metodo")


Array.from(atributo).forEach((e) => {

    console.log(e)

    e.onmouseover = () => {

        console.log("estamos sobre algum atributo")
        info.innerHTML = `
        
             Atributos são as características de um objeto, essas características também são conhecidas como variáveis, utilizando o exemplo das pesspas, temos alguns atributos, tais como: nome, idade e profissão.
        
        `
    }
})



Array.from(metodo).forEach((e) => {

    console.log(e)

    e.onmouseover = () => {

        console.log("estamos sobre algum método")
        info.innerHTML = `
        
             Métodos são as ações que os objetos podem exercer quando solicitados, onde podem interagir e se comunicarem com outros objetos, utilizando o exemplo das pessoas, temos alguns exemplos: andar e falar.
        
        `
    }
})



titulo.onmouseover = () => {

    info.innerHTML = `
    
        Ao nomear uma classe algumas convenções devem ser seguidas:<br>

Manter o nome simples e descritivo;<br>
Usar palavras inteiras, isto é, sem siglas e abreviações;<br>
A primeira letra de cada palavra deve estar em caixa alta.
    
    `
}
