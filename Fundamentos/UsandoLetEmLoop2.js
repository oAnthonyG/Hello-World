const funcs = []

for(let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() //let tem scopo de função/bloco, logo mostra os valores pedidos
funcs[8]()
