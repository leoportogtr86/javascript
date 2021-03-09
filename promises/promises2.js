function promessa(msg, numero) {

    return new Promise((resolve, reject) => {

        if (numero % 2 == 0) {

            resolve("Número par!")


        } else {

            reject("Erro...Número não é par.")


        }

    })

}

promessa("Tentativa...", 7).then((res) => {

    console.log(res)

}).catch((err) => {

    console.log(err)
})

//numa promise, o seu retorno passado via "resolve" é devolvido caso a promessa seja cumprida. Caso contrário, o retorno devolvido pela reject é jogado do catch