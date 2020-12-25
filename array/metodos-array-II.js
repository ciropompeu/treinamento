// arrays em javascript são estruturas de dados
// novos metodos map() filter() reduce() forEach()

let numerosPares = [2,4,6,8,10];

//map() - vai iterando,  percorrendo por cada numero do array e faz a alteração que a gente quer retornando um array com a mesma quantidade de itens

numerosPares.map(function(valor){
    console.log(valor*2); // retorna cada indice
})

let numerosParesDobro = numerosPares.map(function(valor){
    return valor*2; // retorna um novo array
})

console.log("map:");
console.log(numerosParesDobro)

// filter

let numerosFiltrados = numerosPares.filter(function(valor){
    return valor<6;
});

console.log("filter:");
console.log(numerosFiltrados);

// reduce - pegar o array e converter em apenas 1 único valor

let somaPares = numerosPares.reduce(function(acum, valor){
    return acum + valor;
})

console.log("reduce:");
console.log(somaPares+" = 2 + 4 + 6 + 8 + 10, que são os números do array");

// foreach() - interar nos arrays, passar por cada número e fazer o que quiser

console.log("forEach:");
numerosPares.forEach(function(valor,indice){
    console.log("o indice "+indice+" tem o valor "+valor);
})

// find - retorna o valor do primeiro elemento do array, caso não encontre não retorna nada

var metodoFind = numerosPares.find(function(valor){
    return valor % 4 == 0 
})
console.log("find(): retorna o primeiro valor que encontrar")
console.log(metodoFind);

//exercicio
// a partir de uma coleção de números, criar nova estrutura apenas com os maiores de 18

let numeros = [12, 34, 22, 46, 18, 29, 44, 43, 39];

let maiores = numeros.filter(function(valor){return valor>18})

console.log(maiores);