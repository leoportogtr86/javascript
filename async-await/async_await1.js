function mostraNumeroDepois() {

    return new Promise((resolve, reject) => {


        setTimeout(() => {

            resolve(10)

        }, 5000)

    })
}


async function mostrando() {

    let numero = await mostraNumeroDepois()

    console.log(numero)
}

mostrando()
