
let numero = 12;
let fator = 1;
function tabelaDeMultiplicacao(numero) {

    do {
        console.log(numero + "x" + fator + " = " + numero * fator);
        fator++;

    } while (fator <= 10)

}

tabelaDeMultiplicacao(numero);