// loops / ciclos for

let palavra = "papagaio";

function papagaio(palavra) {
    for (let i = 0; i <= 4; i++) {
        console.log(palavra);

    }
}

papagaio(palavra);


//contar numeros impares

let numero = 16;
let impar = 0;

function naoPareDeContarImparesAte(numero) {

    for (let i = 0; i < numero; i++) {
        console.log(i);
        if (i % 2 != 0) {
            impar++;
            console.log(impar)
        }
    }
    return impar;
}

naoPareDeContarImparesAte(numero);

// while


let contador = 0;

while (contador < 7) {
    console.log(contador + " estou dentro do white");
    contador++;

}


// do while
let contadorDo= 0;
do {
    console.log(contadorDo + " estou dentro do do white");
    contadorDo++;
} while (contadorDo < 6)

