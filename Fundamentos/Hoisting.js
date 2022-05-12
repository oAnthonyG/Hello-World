console.log('a =', a) // é possivel declarar a variavel 
var a = 2
console.log('a =', a) //hosting joga as declarão pra cima e pode causar efeitos estranhos

function teste(){
    console.log('b =', b)
    var b = 3
    console.log('b =', b)
}
teste()
//esse efeito funciona apenas com var e não com let
