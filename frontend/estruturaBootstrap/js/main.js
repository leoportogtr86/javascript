let audio1 = document.getElementById('audio1')
let audio2 = document.getElementById('audio2')
let audio3 = document.getElementById('audio3')
let audio4 = document.getElementById('audio4')
let audio5 = document.getElementById('audio5')
let l = document.getElementById('l')
let valor = 0

l.attributes[2].value = 0

document.onclick = (e)=>{

    valor += 10
    l.attributes[2].value = valor
    console.log(l.attributes[2].value)
    

    

    
}

// console.log(load.attributes[1].value)

// audio1.onloadeddata = ()=>{

//     valor+= 20    
//     load.attributes[1].value += valor
//     console.log(valor)
// }



// audio2.onloadeddata = ()=>{

//     valor+= 20    
//     load.attributes[1].value += valor
//     console.log(valor)
// }



// audio3.onloadeddata = ()=>{

//     valor+= 20    
//     load.attributes[1].value += valor
//     console.log(valor)
// }



// audio4.onloadeddata = ()=>{

//     valor+= 20    
//     load.attributes[1].value += valor
//     console.log(valor)
// }



// audio5.onloadeddata = ()=>{

//     valor+= 20    
//     load.attributes[1].value += valor
//     console.log(valor)
// }

