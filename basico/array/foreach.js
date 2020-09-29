let carros = ['gol', 'hrv', 'amarok', 'toro', 'ka', 'celta']
let pares = [2, 4, 6, 8, 10]
let impares = [1, 3, 5, 7, 9]
let todos = []

// executa uma função pra cada elemento do array

carros.forEach((e) => {

    console.log(e)
})

pares.forEach((e) => {

    console.log('Ímpares ' + Number(e + 1))
})

impares.forEach((e) => {

    todos.push(e)
})

pares.forEach((e) => {

    todos.push(e)
})

console.log(todos)