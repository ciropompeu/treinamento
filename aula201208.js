/*

aula 08 de dezembro de 2020
jason é uma estrutura dedados

*/

const variavelObejto = {
    nome: "Rafael",
    idade: 19,
    sexo: "Masculino"
}

const variavelJson = '{"curso":"js_full_stack", "aulas":49, "turma": 16}';

// JSON.stringfy realiza a conversão de objeto para JSON
const varObjToJson = JSON.stringify(variavelObejto);
console.log(varObjToJson);

// JSON.parse realiza a conversão de JSON para objeto
const varJsonToObj = JSON.parse(variavelJson);
console.log(varJsonToObj);

const texto = 'Essa é a nossa string modelo             ';

// length
// Conta a qtd de caracteres
console.log(texto.length);

//indexOf
//retorna a partir de qual posição está o texto quea gente está buscando
console.log(texto.indexOf("ing"));

// slice
// recebe 2 parametros
// o 1o é apartir de onde está buscando
// o 2o parametro é até aonde

console.log(texto.slice(5, 7));   // mostra o é
console.log(texto.slice(texto.indexOf('g')));


// trim
// limpar espaço
// se precisa limpar uma string, retirando espaços no começo ou no fim

console.log(texto.length)
console.log(texto.trim().length);


//split
// dividir atraves de uma key e colocar em arrays


console.log(texto.split("g"));

const texto1 = "Essa, é, nossa, string, modelooooo";
console.log(texto.split(","));

//replace
//recebe dois parametros e troca o primeiro pelo lugar do segund
console.log(texto.replace("nossa", "tua"));

//too uppercase
console.log(texto.toUpperCase());

// to lower case
console.log(texto.toLowerCase());

// criar um objeto, que use metodo de string
// fazer uma conversão para Jason de um objeto 

const palavra1 = "Ciro Pompeu";
const palavra2 = "Silva";
const palavra3 = "Santoro";

const objetos = {
    nome: palavra1,
    nomeDoMeio: palavra2,
    sobrenome: palavra3
}

const nomeCompleto = JSON.stringify(objetos);

console.log(nomeCompleto);

// o que o professor fez

const stringParaModificar = 'caza'

const variavelObjeto = {
    nome: "Rafael",
    idade: 54,
    sexo: "masculino",
    stringModificada: stringParaModificar.replace('z', 's')
};

const varObjToJson1 = JSON.stringify(variavelObjeto);
console.log(varObjToJson1);


const varString = '3.4';
//fala que tipo é
console.log(typeof (varString));

// const varNumberInt = parseInt(varString);
// converte em numero mas não traz tudo (fica 3)
// const varNumberInt = parseInt(varString);
// converte em numero e traz o decimal

const varNumberInt = parseInt(varString);
console.log(varNumberInt)
console.log(typeof (varNumberInt))

const varTexto = 'dias 365 tem um ano';
const varToNumberComNumber = parseInt(varTexto)
console.log(varToNumberComNumber)
console.log(typeof (varToNumberComNumber))

const varNumberToString1 = 434
const varNumberToString1 = varNumberToString1.toString()
console.log(typeof (varNumberToString1))
console.log(varNumberToString1)


//

const funcaoPadrao = function somar(numeroUm, numeroDois) {
    const soma = numeroUm + numeroDois
    return soma;
}

console.log(funcaoPadrao(3, 5));


// arrow function



const arrowFunction = (numeroUm, numeroDois) => {
    const soma = numeroUm + numeroDois
    return soma;
}



// quando so tem uma linha pode fazer assim

const arrowFunction = (numeroUm, numeroDois) => numeroUm + numeroDois
console.log(arrowFunction(3, 5));

// ou quando tem um parametro

const arrowFunction = numeroUm => numeroUm * 2
console.log(arrowFunction(2));


//exercicio

// escrever uma arrowfunction que vai receber uma parametro
// * imprimir no console qual o tipo de parametro que vocês estão recebendo
// * realizar conversão
// * imprimir no console um novo tipo de dado desse parametro convertido
// * retornar o parametro convertido


const dados = "2020";

const funcaoExercicio = (valor) => {
    console.log(typeof (valor));
    const novoDados = parseInt(dados);
    console.log(typeof (novoDados));
    console.log(novoDados);
    return novoDados

}

funcaoExercicio(dados);

// feito pelo professor

const converterParametro = parametro => {
    console.log(`O tipo de parametro é: ${typeof (parametro)}`);
    const parametroConvertido = parseInt(parametro);
    console.log(`O novo tipo de parametro e: ${typeof (parametroConvertido)}`);
    return parametroConvertido

}


// callback

const calcularValorTotalColocacaoPisoProfissional = (valor, metros) => valor * MediaStreamTrackAudioSourceNode;
const calcularValorDometroDoProfissional = (valorTotal, metros) => valorTotal / metros;

const realizaCalculos = (numeroUm, numeroDois, calculo) => calculo(numeroUm, numeroDois);

console.log(realizaCalculos(15, 3, calcularValorDometroDoProfissional));

// callback é quando passa uma funcao como patrametro, que é o que está acontecendo no calculo

const retornoCallback = setTimeout(() => console.log('este é um callback'), 5000);

function imprime() {
    console.log('este é um callback')
}

const retornoCallback = setTimeout(imprime, 5000);




// exemplo passado pelo professor

//closure chamar uma funcao filha dentro de uma funcao pai

function realizarCalculos(valorUm, valorDois) {

    // toda funcao filha tem acesso aos parametros da funcao pai

    function somar() {
        console.log(`O retorno da funcao somar é ${valorUm + valorDois}`)
        return valorUm + valorDois;
    }

    function subtrair() {
        console.log(`O retorno da funcao subtrair é ${valorUm - valorDois}`)
        return valorUm - valorDois;
    }

    function dividir() {
        console.log(`O retorno da funcao dividir é ${valorUm / valorDois}`)
        return valorUm / valorDois;
    }
    function multiplicar() {
        console.log(`O retorno da funcao multiplicar é ${valorUm * valorDois}`)
        return valorUm * valorDois;
    }

    function somarTodosResultados() {
        return somar() + subtrair() + dividir() + multiplicar()
    }

    console.log(`A soma de todos os resultados é: ${somarTodosResultados()}`)

}

realizarCalculos(12, 1212);