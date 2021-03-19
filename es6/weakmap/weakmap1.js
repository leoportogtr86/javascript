//estrutura onde as chaves só podem ser objetos

let primeiro = document.getElementById("primeiro")
let segundo = document.getElementById("segundo")
let terceiro = document.getElementById("terceiro")



let weakmap = new WeakMap()

weakmap.set(primeiro, "primeiro elemento")
weakmap.set(segundo, "segundo elemento")
weakmap.set(terceiro, "terceiro elemento")



console.log(weakmap)

weakmap.has(primeiro)


