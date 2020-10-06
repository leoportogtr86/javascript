let p = new Promise((resolve, reject) => {

    resolve([0, 1, 2, 3, 4, 5])

})

p
    .then((res) => {

        console.log(res)

        return res[0]
    })
    .then((res) => {

        console.log(res)
        return res + 10
    })
    .then((res) => {

        console.log(res)
        return res * 8
    })
    .then((res) => {

        
        return res * 8
    })
    .then((res) => {

        console.log(res)
    })