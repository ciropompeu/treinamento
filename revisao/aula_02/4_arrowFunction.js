const funcaoPadrao = function somar(numeroUm, numeroDois){
    const soma = numeroUm + numeroDois;
    return soma;
}
console.log(funcaoPadrao(3, 5))


const arrowFunction = (numeroUm, numeroDois) => {
    const soma = numeroUm + numeroDois
    return soma
}
console.log(arrowFunction(4, 9))


//Reduzir e simplificar a arrow function
const arrowFunctionSimplificada = numero => numero * 3
console.log(arrowFunctionSimplificada(8))

