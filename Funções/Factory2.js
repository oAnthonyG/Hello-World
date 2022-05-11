function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.4
    }
}

console.log(criarProduto('Celular', 200.99))
console.log(criarProduto('Caneta', 1.99))
