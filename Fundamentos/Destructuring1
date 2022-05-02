// novo recurso do ES2015

const pessoa = {
    nome: 'Yasmin',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada) // não existentes viram undefined

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)//retorna undefined se apenas um objeto que não foi setado

const { conta: { ag, num}} = pessoa
console.log(ag, num) //erro, tentando acessar algo que não é objeto
