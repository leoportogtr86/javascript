

let num = new Promise((e)=>{

    e([10, 4, 7, 789, 412])   

})

num.then((e)=>{

    console.log(e)
})