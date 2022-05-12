const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //se for um numero inteiro ele passa true
console.log(Number.isInteger(peso2)) // se não for inteiro passa false

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2)) //ele diminui um numero grande para quantas casas decimais vc mandar
console.log(media.toString()) // ele retorna ao numero original
console.log(media.toString(2)) // se colocar o 2 ele fica em binario
console.log(typeof media) // media é uma var tipo number
console.log(typeof Number) // Number com o N maiusculo é uma função
***************************************************************************************************
//Numeros Cuidado
console.log(7 / 0) // dividir por 0 da infinito
console.log("10" / 2) //da pra dividir por numeros inteiros
console.log('3' + 2) // o + serve de concatenação
console.log('3' - 2)
console.log("show!" * 2) //not a number logo não funciona
console.log(0.1 + 0.7) // imprecisão 
// console.log(10.toString()) isso aqui da erro use o de baixo
console.log((10.345).toFixed(2))
