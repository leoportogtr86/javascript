let funcionario = {

    numero: 6,
    horas_trabalhadas: 145,
    valor_por_hora: 15.55,
    salario (horas_trabalhadas, valor_por_hora){

        return this.horas_trabalhadas*this.valor_por_hora

    }
}

console.log('Número do funcionário: ' + funcionario.numero)
console.log('Salário: ' + funcionario.salario() + ' reais')
