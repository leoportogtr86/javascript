let h1 = document.getElementsByTagName('h1')


//certo

let h1_array = Array.from(h1)

h1_array.forEach((e)=>{

    e.classList.add('bg-red')
})

