let p = new Promise((resolve, reject) => {

    resolve("Leonardo Reis Porto")


})


p
    .then(res => res.split(' '))
    .then((res) => console.log(res))