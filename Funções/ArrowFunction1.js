let dobro = function(a){
    return 2 * a
}

//primeiro exemplo
dobro = (a) => {
    return 2 * a 
}

//segundo exemplo
dobro = a => 2 * a //return implicito
console.log(dobro(Math.PI))

//outro exemplo
let ola = function(){
    return 'Olá'
}
//primeiro exemplo
ola = () => 'Olá'
//segundo exemplo
olha = _ => 'Olá' //possui um parametro
console.log(ola())
