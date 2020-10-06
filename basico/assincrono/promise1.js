let p = new Promise((resolve, reject) => {

    resolve('resolvida')

})

p
    .then((res) => {

        console.log(res)
    })
    .then((res) => {

        console.log('segundo then')
    })
    .then((res) => {

        console.log('terceiro then')
    })
    .then((res) => {

        console.log('quarto then')
    })
    .then((res) => {

        console.log('quinto then')
    })