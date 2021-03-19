//aceita qualquer estrutura (tipos primitivos, objetos, funções etc como chave)

let mapa = new Map()


let string = "Apenas uma string"
let array = ["java", "js", "ts", "c", "c++"]
let objeto = {

    nome: "cadeira",
    preco: 49.90
}
let funcao = () => {

    return "Oi, sou uma função!!"
}


//setando as chaves e valores

mapa.set(string, "Uma string")
mapa.set(array, "um array")
mapa.set(objeto, "um objeto")
mapa.set(funcao, "uma função")



//recuperando os valores a partir de chaves
console.log(mapa.get(string))
console.log(mapa.get(array))
console.log(mapa.get(objeto))
console.log(mapa.get(funcao))


