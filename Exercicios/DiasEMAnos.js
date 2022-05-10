const now = new Date(); // Data de hoje
const past = new Date('1989-08-05') // Outra data no passado
const diff = Math.abs(now.getTime() - past.getTime()) // Subtrai uma data pela outra
const days = Math.ceil(diff / (1000 * 60 * 60 * 24)) // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
const horas = Math.ceil(days / (7)) 
const daysSleep = Math.floor(horas / 24)


// Mostra a diferença em dias
console.log('Entre 05/08/1989 até agora já se passaram ' + days + ' dias') 
console.log('Se vc tivesse dormido 7horas por dia teria dormido por ' + horas + ' horas')
console.log('voce dormiu por '+daysSleep+'dias da sua vida')
