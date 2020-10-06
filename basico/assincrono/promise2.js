let p = new Promise((resolve) => {

    resolve(['Leo', 'Lucas', 'Bob', 'Juan', 'Alessandra', 'Maria'])

})

    .then((res) => {

        console.log(res)

        return res[0]
    })

    .then((res) => {

        console.log(res)

        return res + ' Porto'
    })
    .then((res)=>{

        console.log(res)
    })
