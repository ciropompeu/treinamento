//callback funcao que passa como parametro outra funcao

const somar = (a, b) => a + b;
const calculadora = (a, b, operacao) => operacao(a, b);


// chamando a funcao como parametro
console.log(calculadora(10, 20, somar));

// criando uma funcao dentro do parametro
console.log(calculadora(12, 24, (a,b) => a - b));

//exercicio dobro e triplo

const dobro = a => a*2;
const triplo = a => a*3;
const aplicar = (a,operacao) => operacao(a);

console.log(aplicar(12, triplo));

/*

jeito comprido
function dobro(a) {
     return a*2;
}
function triplo(a) {
     return a*3;
}
function aplicar (a,operacao) {
    return operacao(a);
}
*/

// calculadora

const somar = (a,b) => a+b;
const subtrair = (a,b) => a-b;
const multiplicar = (a,b) => a*b;
const dividir = (a,b) => a/b;

const calculadora = (a,b,operacao) => operacao(a,b);

console.log(calculadora(121,11,dividir));

/* jeito comprido

function somar(a,b){
    return a+b;
}
function subtrair(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}
function dividir(a,b){
    return a/b;
}

function calculadora(a,b,operacao){
    return operacao(a,b);
}

console.log(calculadora(121,11,dividir));

*/

// passando um callback

let valores = ["www.terra.com.br","www.google.com.br"];


const adicionarHttp = (valor) => "http://" + valor;
const processar = (lista, operacao) => {
    for (let i = 0; i < lista.length; i++) {
        lista[i] = operacao(lista[i]);
    }
    return lista;
}

console.log(processar(valores, adicionarHttp));


/*

comprido

let colecao = ["1","2","3"];

function adicionarHttp(url) {
    return "http://" + url;
}

function processar(lista, operacao) {
 for (let i = 0; i < lista.length; i++){
     lista[i] = operacao(lista[i]);
 }
 return lista;
}

console.log(processar(colecao, adicionarHttp));
 */