//replace + regex

let frase1 = 'The book is on the table.'

let frase2 = frase1.replace(/ /g, '-')

frase2 = frase2.toLocaleLowerCase()

console.log(frase2)

let frase3 = 'João comprou pão francês, açúcar e feijão.'


function modificar(string) {

    let string_modificada

    string_modificada = string.replace(/ /g, '-')
    string_modificada = string_modificada.toLocaleLowerCase()
    

    return string_modificada
    
}

console.log(modificar(frase3))


