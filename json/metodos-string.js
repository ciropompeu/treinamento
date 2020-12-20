// strings são cadeias de texto
// para o javascript as strings são objetos

//.lenght retornar a extensão de uma cadeia de texto
//.indexOf o valor retornado onde se encontra
//.slice fatia, porcao, pedaço - precisa passar dois parametros onde comeca e onde vai terminar a fatia

//lenght
let texto = "oi eu sou o vinicius";
console.log(texto.length);
// vai retornar o comprimento, somar todos os caracteres incluindo os espaços

//indexOf

console.log(texto.indexOf("s"));
console.log(texto.indexOf("vinicius"));
console.log(texto.indexOf("vini"));
console.log(texto.indexOf("claiton")); // numero negativo porque a palavra não existe

// para o javascript toda contagem comeca do zero

//slice
// pegar a palavra oi
console.log(texto.slice(0,3)) // retorna oi
console.log(texto);

let palavra = texto.slice(0,3);
console.log(palavra);

// trim - remover espacos em brancos antes de depois de um caracter alfanumerico

// split - converter uma string em um array (o delimitadoir pode ser qualquer caractere)

// replace - substituir uma parte do texto - tem dois parametros (o primeiro é o que precisa ser tirado, o segundo e o que precisa ser recolocado)

