


$(document).ready(() => {

    console.log('hello world')
    let botao = $('#botao')

    let estilo = {

        color: 'pink',
        backgroundColor: 'black',
        fontSize: '40px'
    }


    let titulo = $('#titulo')


    titulo.css('color', 'blue')




    botao.click(() => {

        console.log('click')


        titulo.animate({ opacity: '0.5', color: 'red' }, { duration: 5000 })
    })




})