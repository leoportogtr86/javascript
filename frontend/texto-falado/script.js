const utterance = new SpeechSynthesisUtterance()
utterance.lang = 'pt-br'


let botao = document.getElementById('botao')
let textArea = document.getElementById('textArea')

textArea.oninput = setText

function setText(e) {

    utterance.text = e.target.value
    console.log(e.target.value)

}

botao.onclick = function () {

    speechSynthesis.speak(utterance)

}
