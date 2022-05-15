var numero = 1 
{
    var numero = 2
    console.log('dentro =', numero) //var só é sepeparado do scopo global quando usa function
}
console.log('fora =', numero)
