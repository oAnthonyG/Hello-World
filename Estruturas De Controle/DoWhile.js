function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) - max
    return Math.floor(valor)
}

let opcao = 0 //somente iniciada a variavel, sem valor inicial

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) 

console.log('Até a proxima!')

