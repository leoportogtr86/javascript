//referencia
//https://medium.com/@thihenos/node-crud-arquivos-142e3fb1892d


//usando a lib do node filesystem (fs) para ler, criar e renomear e excluir arquivos
const fs = require('fs')

//passamos uma callback como parametro para a funcao readFile (assincrona)

//lendo conteudo do arquivo
fs.readFile('./arquivo.txt', (err, data) => {

    if (err) {

        console.log(err)

    } else {

        console.log(data.toString())

    }


})


//escrevendo arquivos
//funcao de callback para realizar uma açao apos o arquivo ter sido escrito ou ter dado algum 
//erro
fs.writeFile('./data/um_texto.txt', 'Conteúdo a ser gravado no arquivo', (err) => {

    if (err) {

        console.log(err)

    } else {

        console.log('arquivo escrito com sucesso!')
    }
})


//renomeando arquivos
fs.rename('./data/um_texto.txt', './data/outro_titulo.txt', (err) => {

    if (err) {

        console.log(err)
    } else {

        console.log('arquivo nomeado com sucesso')
    }
})


//excluindo arquivos

fs.unlink('./data/outro_titulo.txt', err => {

    if (err) {

        console.log(err)

    } else {

        console.log('arquivo excluído com sucesso')

    }
})