const utterance = new SpeechSynthesisUtterance()
utterance.lang = 'pt-br'
utterance.text = 'teste de fala'


document.onclick = function () {

    speechSynthesis.speak(utterance)

}