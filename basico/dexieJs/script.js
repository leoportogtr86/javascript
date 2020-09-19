console.log('hello dexieJs')

//criando uma instancia do banco (banco1)

const db = new Dexie('banco1')



// criando a tabela e seus campos que usaremos para buscas futuras


db.version(1).stores({

    guitarras: '++id, marca, modelo, preco'
    
    //++id: responsavel por incrementar o campo id 
})

//criando uma classe para instanciar e realizar o CRUD dos dados no banco de dados so dados de um objeto instanciado


class Guitarra {

    //atritbutos da classe

    constructor(marca, modelo, preco){

        
        this.marca = marca
        this.modelo = modelo
        this.preco = preco
    }

    //metodos da classe


    getAll (){

        return db.guitarras.toArray()


    }

    save (){

        //salvando os dados
        db.guitarras.add(this)


    }

    //metodo para deletar algum par de chave:valor usando a chave primaria como parametro

    delete (pk){

        db.guitarras.delete(pk)



    }

    update (){

        db.guitarras.put(this)




    }


}

//instancias da classe Guitarra
const fender = new Guitarra('fender', 'jaguar', 5000)
const gibson = new Guitarra('gibson', 'les paul', 7800)



fender.save()
gibson.save()





// //chamada dos metodos para salvar
// fender.save()
// gibson.save()


// //chamada do metodo para buscar todos os dados salvos
// fender.getAll().then((e)=>{

//     console.log(e)
// })

// //deletando
// gibson.delete(3)

// //atualizando

// fender.update()

// //realizando uma busca baseado em algum parametro

// db.guitarras.where('marca').equals('gibson').toArray().then((e)=>{

//     console.log(e)
// })