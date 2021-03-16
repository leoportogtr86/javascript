const readline = require("readline")


const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
})


rl.question("Digite o seu nome:\n", (resposta) => {

    console.log("Resposta=> " + resposta)

    rl.close()

})
