/* Uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
X", em que X é o quanto o funcionário ganhou no mês.
*/

function calcularSalario(horasTrabalhadas, recebePorHora){
    const salarioBruto = horasTrabalhadas * recebePorHora
    const salarioLiquido = salarioBruto - salarioBruto * 30/100

    return `Salário igual a R$ ${salarioLiquido}`
}
console.log(calcularSalario(200,30))
