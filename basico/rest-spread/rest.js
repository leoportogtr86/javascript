function fn(...args) {

    console.log(args)

}


fn(1, 2, 3, 4, 5)


function dobrandoParams(...params) {

    params.forEach((e) => {

        console.log(e * 2)
    })

}

dobrandoParams(10, 20, 45, 100)