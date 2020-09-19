//criando a funcao f1

function f1() {

    console.log('função f1')
}




//f1 recebe uma funcao como parametro e a chama

function f2(funcao) {

    funcao()

}

f2(f1)

console.log(typeof f1)