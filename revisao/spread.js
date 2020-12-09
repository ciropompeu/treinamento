// spread - operador de propagação
// espalhar um a um dos valores da variavel original dentro da nova variavel
// para usar basta colocar ... antes do nome do array


let frutas = ["maça", "banana", "uva"];
let frutasDois = ["laranja", "abacate", "goiaba"];

let listaCompleta = [frutas, frutasDois];
let listaCompletaSpread = [...frutas, ...frutasDois];

console.log(listaCompleta);
console.log(listaCompletaSpread);

// spread com objeto

let pessoa = {
    nome: "vinicius",
    idade: "22"
}

let infoPessoal = {
    tel: "123-4567",
    rg: 12345678 - 9,
    ...pessoa
}

let pessoaCompleta = {
    endereco: "rua da mococa",
    ...infoPessoal
}

console.log(infoPessoal);

// spread com funcao

function letras(...paramns) {
    console.log(paramns)
}

console.log(letras("a"));
console.log(letras("a", "b"));
console.log(letras("a", "b", 1, 2, 3, "c"));
