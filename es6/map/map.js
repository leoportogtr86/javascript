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

//tamanho de um map

console.log(mapa.size)


//testando a existência de uma chave no map

console.log(mapa.has("123"))
console.log(mapa.has(array))

//deletando um registro

mapa.delete(funcao)

console.log(mapa)



//limpando todos os dados do map
mapa.clear()

console.log(mapa)


mapa.set("um", 1)
mapa.set("dois", 2)
mapa.set("três", 3)
mapa.set("quatro", 4)
mapa.set("cinco", 5)
mapa.set("seis", 6)
mapa.set("sete", 7)
mapa.set("oito", 8)
mapa.set("nove", 9)
mapa.set("dez", 10)


//iterando em maps


//retornando chave e valor
for (const e of mapa) {

    console.log(e)

}


//retornando chaves
for (const e of mapa.keys()) {

    console.log(e)

}



//retornando valores
for (const e of mapa.values()) {

    console.log(e)

}


//retornando chave e valor
for (const e of mapa.entries()) {

    console.log(e)

}



