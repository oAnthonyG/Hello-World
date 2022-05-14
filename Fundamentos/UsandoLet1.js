let numero = 1
{
    let numero = 2 //let tem scopo global, de função e de bloco {}
    console.log('dentro = ', numero)
}
console.log('fora =', numero )
