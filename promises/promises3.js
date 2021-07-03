let promessa = new Promise((resolve, reject) => {

    let soma = 10 + 5
    if (soma > 20) {

        resolve(soma)

    } else {

        reject("Deu bronca!!")
    }

})


promessa
    .then(res => console.log(res))
    .catch((err) => {

        console.log(err)
    })