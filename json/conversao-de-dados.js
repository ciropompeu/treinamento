// type of - serve para descobrir o tipo de variável

let texto = "abc";
console.log(typeof(texto));

let numero = 1;
console.log(typeof(numero));

let numeroDecimal = 1.10;
console.log(typeof(numero));
// também retornará number apesar de ser um decimal

//converter um texto para number
// parseint
// number

let textoParse = "5";
console.log(parseInt(textoParse));
console.log(typeof(textoParse));

let numeroParse = parseInt(textoParse);
console.log(typeof(numeroParse));

let textoNumber = "5";
console.log(Number(textoNumber));
console.log(typeof(textoNumber));

let numeroNumber = Number(textoNumber);
console.log(typeof(numeroNumber));

// novo exemplo para entender a diferença


let textoNovoParse = "123abc";
console.log(parseInt(textoNovoParse));  // vai mostrar 123
console.log(typeof(textoNovoParse));

let numeroNovoParse = parseInt(textoNovoParse);
console.log(typeof(numeroNovoParse));

let textoNovoNumber = "123abc";
console.log(Number(textoNovoNumber)); // vai mostrar NaN
console.log(typeof(textoNovoNumber));

let numeroNovoNumber = Number(textoNovoNumber);
console.log(typeof(numeroNovoNumber));

//

// funcao chamada String() parecida com a funcao Number()
// converter numero em texto

let numeroTexto = 111;
console.log(typeof(numeroTexto));

let textoString = String(numeroTexto);
console.log(typeof(textoString));
console.log(textoString);

// toString - a sintaxe muda

let numeroTextoToString = 111;
console.log(typeof(numeroTextoToString));

let textoToString = numeroTextoToString.toString();
console.log(typeof(textoToString));
console.log(textoToString);