//referencia
//https://www.youtube.com/watch?v=XlNLjG2c9uM

const utterance = new SpeechSynthesisUtterance()
utterance.lang = 'pt-br'




let botao = document.getElementById('botao')
let textArea = document.getElementById('textArea')


//ao escrever o texto na textArea, iremos setar o texto do objeto utterance
textArea.oninput = setText


//funcao para setar o texto
function setText(e) {

    utterance.text = e.target.value
    console.log(e.target.value)

}

botao.onclick = function () {

    //funcao para falar o texto

    speechSynthesis.speak(utterance)

}
