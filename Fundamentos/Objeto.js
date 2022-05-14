const prod1 = {} // {} é a forma literal de escrever um objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // é possivel usar essa notação, mas evitar usa atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo', // contando que o atributo esteja dentro de {} n tem problema repetir o nome
    preco: 79.90, //chave é o indetificador e o valor é o valor 
    obj: {
        panela: 1,
        obj: {
            fogao: 2
        }
    }
}

'{"nome": "Camisa Polo", "preco": 79.90}' //exemplo de json e ele é um formato textual não objeto
console.log(prod2)
