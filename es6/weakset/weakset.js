//so aceita objetos
//nao iteravel
//nao podemos usar clear para limpar tudo


let musica1 = {

    titulo: "For the Love of God",
    autor: "Steve Vai"
}


let musica2 = {

    titulo: "Rebirth",
    autor: "Angra"
}


let musica3 = {

    titulo: "Summer Song",
    autor: "Joe Satriani"
}


let musica4 = {

    titulo: "Pau de Arara",
    autor: "Kiko Loureiro"
}


let setList = new WeakSet([musica1])


setList.add(musica2)


console.log(setList)

