$(document).ready(() => {

    console.log('hello world')
    let botao = $('#botao')


    let titulo = $('#titulo')


    titulo.css('color', 'blue')

    setTimeout(() => {

        titulo.css('color', 'red')

    }, 3000);

    $(document).click(() => {

        titulo.css('backgroundColor', 'yellow')
    })

    botao.click(() => {

        botao.animate({ left: '500px' })
    })


})