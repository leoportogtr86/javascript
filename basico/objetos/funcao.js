function Pessoa(nome, idade, profissao, cpf) {

    this.nome = nome
    this.idade = idade
    this.profissao = profissao
    this.pula = pula
    this.setIdade = setIdade
    this.getCpf = getCpf


    function getCpf() {

        return cpf
        
    }


    function setIdade(idade) {

        this.idade = idade
        
    } 


    function pula() {

        return 'upa upa upa'
        
    }    
    
    
}

let davi = new Pessoa('Davi', 4, 'estudante', '4565423565')

console.log(davi)

davi.idade = 5

console.log(davi.getCpf())

