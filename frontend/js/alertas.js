//artigo referencia
//https://www.devmedia.com.br/alert-em-javascript/37208

let btn = document.getElementById('btn')


//um simples alerta, caixa de terxto com uma mensagem.


btn.onclick = function() {

    alert('Olá, eu sou um simples alerta!')

}


//caixa de confirmacao

let res = confirm('Escolha uma opção')

//retorna true ou false dependendo da resposta do usuario
//ao clicar em ok (true) ou cancelar(false)

if (res == true) {

    alert('Você clicou em ok')


} else {

    alert('Você clicou em cancelar')
}

console.log(res)


let nome = prompt('Digite o seu nome')
let idade = prompt('Digite a sua idade')
let altura = prompt('Digite a sua altura')
let peso = prompt('Digite o seu peso')

alert(`Olá ${nome}, a sua idade é ${idade} anos\nVocê tem ${altura} de altura\nE seu peso é ${peso}`)