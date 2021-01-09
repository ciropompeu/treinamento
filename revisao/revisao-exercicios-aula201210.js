//exercicio 1 - enunciado
//usar um array contendo números aleatórios, realizar um for/of multiplicando o valor por 3 e printar no console
//plus: multiplicar somente os números pares

const valores = [1, 2, 5, 23, 6, 6, 53, 34, 6, 4];

for (const numeros of valores) {
    console.log(numeros * 3)
}


for (const numeros of valores) {
    if (numeros % 2 == 0) {
        console.log(numeros * 3)
    }
}

// exercício 2 - enunciado:
// Criar um array com  objetos que contenham nome e data de nascimento,
// após criar uma arrow function que faça primeiramente a desestruturação do array pela pessoa2
// e depois desestruture o objeto para capturar o nome da pessoa.
// Imprimir o nome da pessoa no console.

let colecao = [
    {
        nome: 'caro',
        nascimento: 07 / 07 / 1977
    }, {
        nome: 'cero',
        nascimento: 08 / 08 / 1988
    }, {
        nome: 'ciro',
        nascimento: 09 / 09 / 1999
    }

]

let funct = (valor) => {
    let [, pessoa2] = valor;
    let { nome: resultado } = pessoa2;
    return resultado;
}

console.log(funct(colecao));







