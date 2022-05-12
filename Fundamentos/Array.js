const valores = [7.7, 8.9, 6.3, 9.2] //array é uma estrutura indexçada q é usado []
console.log(valores[0], valores[3])
console.log(valores[4]) //não da erro porem mostra indefinido

valores[4] = 10
console.log(valores)
console.log(valores.length) //mostra a quantidade de elementos dentro do array

valores.push({ida: 3}, false, null, 'teste') //push adiciona novos elementos dentro do array
console.log(valores)

console.log(valores.pop()) //tira o ultimo valor do array
delete valores[0] //tira um atributo dentro deu um objeto
console.log(valores)

console.log(typeof valores)
