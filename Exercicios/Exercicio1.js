"uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final."

function cumprimentar(nome) {
   const saudacao = "Olá"
   return [saudacao, nome].join(', ').concat("!")
}
console.log(cumprimentar("Daniel"))
console.log(cumprimentar("Yasmin"))
