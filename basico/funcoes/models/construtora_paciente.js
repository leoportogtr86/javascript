function Paciente() {

    let nome
    let nome_pai
    let nome_mae
    let data_nasc
    let contato
    let endereco

    this.getEndereco = function () {

        return endereco
        
    }

    this.setEndereco = function (endereco) {

        this.endereco = endereco
        
    }

    this.getNome = function () {

        return nome
        
    }

    this.setNome = function (nome) {

        this.nome = nome
        
    }

    this.getNomePai = function () {

        return nome_pai
        
    }

    this.setNomePai = function (nome) {

        this.nome_pai = nome
        
    }

    this.getNomeMae = function () {

        return nome_mae
        
    }

    this.setNomeMae = function (nome) {

        this.nome_mae = nome
        
    }

    this.getDataNasc = function () {

        return data_nasc
        
    }

    this.setDataNasc = function (data) {

        this.data_nasc = data
        
    }

    this.getContato = function () {

        return contato
        
    }

    this.setContato = function (contato) {

        this.contato = contato
        
    }
    
}

module.exports = Paciente