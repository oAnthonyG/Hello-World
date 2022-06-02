const y = 'Global'

function fora(){
    const y = 'local'
    function dentro(){
        return y 
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
