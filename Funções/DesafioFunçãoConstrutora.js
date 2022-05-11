function Pessoa(nome){
    this.nome = nome 

    this.falar = function(){
        console.log(`meu nome é ${nome}`)
    }
}
const p1 = new Pessoa('Guilherme')
p1.falar()
