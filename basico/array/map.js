let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let itens = ['arroz', 'feijao', 'ovo', 'farinha', 'acucar', 'sal', 'pao']

//mapeia o array, modificando-o e salvando-o em um novo array

let dobro = n.map(e => e*2)

console.log(dobro)

let triplo = n.map(e => 3*e)

console.log(triplo)

let lista_feira = itens.map((e)=>{

    return `<li>${e}</li>`
})

console.log(lista_feira)

