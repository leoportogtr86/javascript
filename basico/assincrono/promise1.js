let p = new Promise((resolve, reject) => {

    resolve('resolvida')


})

p.then((res) => {

    console.log(res)
})