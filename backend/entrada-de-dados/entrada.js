console.log("Digite o seu nome:")

process.stdin.on("data", (data) => {

    console.log(data.toString())

})