let chat = require('./chat')

let total = chat.match(/\n/gi).length
let amor = chat.match(/amor/gi).length
let bb = chat.match(/bb/gi).length
let teAmo = chat.match(/te amo/gi).length
let emojiRisada = chat.match(/😂|.k./gi).length
let davi = chat.match(/davi/gi).length
let liz = chat.match(/liz/gi).length
let trab = chat.match(/trab/gi).length
let deus = chat.match(/deus/gi).length
let dinheiro = chat.match(/dinheiro/gi).length
let leo = chat.match(/Leo Porto/gi).length
let chris = chat.match(/Chris/gi).length

console.log(`Total de mensagens analisadas: ${total}`)
console.log(`Total de mensagens de Leo: ${leo}`)
console.log(`Total de mensagens de Chris: ${chris}`)
console.log(`Total de "amor": ${amor}`)
console.log(`Total de "bb": ${bb}`)
console.log(`Total de "te amo": ${teAmo}`)
console.log(`Total de risadas: ${emojiRisada}`)
console.log(`Total de "Davi": ${davi}`)
console.log(`Total de "Liz": ${liz}`)
console.log(`Total de termos relacionados a "trabalho": ${trab}`)
console.log(`Total de termos relacionados a "Deus": ${deus}`)
console.log(`Total de termos relacionados a "Dinheiro": ${dinheiro}`)



