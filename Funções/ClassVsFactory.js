//Class
class Pessoa{
    constructor(nome){
        this.nome = nome 
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Guilherme')
p1.falar()

//Factory
const criarPessoa = nome =>{
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = criarPessoa('Yasmin')
p2.falar()
