let compararComThis = function(param){
    console.log(this === param)
}
compararComThis(global)

const obj = {}
compararComThis = compararComThis.bind(obj)
compararComThis(global)
compararComThis(obj)

let compararComArrow = param => console.log(this === param)
compararComArrow(global)
compararComArrow(module.exports)

compararComArrow = compararComArrow.bind(obj)
compararComArrow(obj)
compararComArrow(module.exports)
