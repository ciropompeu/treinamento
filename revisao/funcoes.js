//exercicio com declaracao de funcoes dentro de funcoes

let numero = 12;

function anterior(numero) {
    console.log(numero - 1);
    return numero - 1;
}

function triplo(numero) {
    console.log(numero * 3);
    return numero * 3;
}

function anteriorDoTriplo(numero) {
    console.log(anterior(triplo(numero)));
}

anterior(numero);
triplo(numero);
anteriorDoTriplo(numero);


//funcao para descobrir se o numero é par

let numero = 10;

function ePar(numero) {
    return numero % 2 == 0;
}

console.log(ePar(numero));

//modo declarativo

function exemplo() {
    return "Olá, sou uma função"
}

// variavel de escopo global - enxergado dentro de uma funcao
let numero = 32;

function somar(a, b) {

    //variavel de escopo local  - enxergado apenas dentro da funcao que foi criada
    let numeroLocal = 1500;
    console.log(numero);
    console.log(numeroLocal);
    console.log('estou somando')
    return a + b;
}
let resultadoSoma = somar(1, 2);
console.log(resultadoSoma);

// modo expressao

let exemplo = function () {
    return "Oi, eu sou uma função expressa"
}

const multiplicar = function (a, b) {
    console.log('estou multiplicando')
    return a * b;
}

let resultadoMultiplicar = multiplicar(2, 10);
console.log(resultadoMultiplicar);



