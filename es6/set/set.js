//listas com itens únicos (sem repetição)



//Se tentarmos adicioná-lo mais de uma vez, ela deve ser inteligente
//o suficiente para saber que aquele item já está lá e não o adicionar
//novamente.


let set = new Set()

set.add("Davi")
set.add("Chris")
set.add("Liz")
set.add("Leo")
set.add("Davi")
set.add("Davi")
set.add("Davi")


console.log(set.size)


for (let i of set) {

    console.log(i)
}

//imprime só elementos que não se repetem


let set2 = new Set([0, 1, 2, 2, 3, 4, 5, 5, 10])

console.log(set2.size)


for (let i of set2) {

    console.log(i)


}