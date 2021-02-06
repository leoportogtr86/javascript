ScrollReveal().reveal('.txt1', { delay: 1000 })
ScrollReveal().reveal('.txt2', { delay: 4000 })
ScrollReveal().reveal('.txt3', { delay: 5000 })
ScrollReveal().reveal('.txt4', { delay: 7000 })
ScrollReveal().reveal('.fret', { delay: 5000 })
ScrollReveal().reveal('#fim', { delay: 2000 })

let x = 0
let y = 0


setInterval(() => {

    x += 1
    y += 1
    window.scroll(x, y)

}, 100);