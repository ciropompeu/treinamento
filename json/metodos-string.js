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

//trim 
let texto1 = "       ola mundo"
console.log(texto1);
console.log(texto1.trim());
console.log(texto1);

// split - converter o que é o texto em um array

console.log(texto.split());
console.log(texto.split(" "));
console.log(texto.split("v"));

// replaces

let textoNovo = texto.replace("vinicius","claiton")
console.log(textoNovo);

let textoNome = "jose maria joao vinicuis jose ignacio luis jose";
console.log(textoNome);
console.log(textoNome.replace("jose","matilde"));
// para trocar todos tem que usar /palavra/g
// para trocar todos independente de como esta escrito /palavra/gi
console.log(textoNome.replace(/jose/g,"matilde"));

// exercicios completar url

let palavra1 = "www.teste.com.br"
let prefixo = "http://"

function dominio(palavra1){

    return prefixo + palavra1;

}

console.log(dominio(palavra1));

// contas letras palavras

let texto2 = "inconstitucionalissimamente";
console.log(texto2.length)

// substituicao rapida

let frase = "boa tarde";
let palavra2 = "tarde";
let troca = "noite";

function substituicaoRapida(frase,palavra2,troca){
    return frase.replace(palavra2, troca)
}

console.log(substituicaoRapida(frase,palavra2,troca));

// exerciocio menciona na frase (booleano)

let texto = 'Existem muitas linguagens de programação e javascript é uma delas';
let palavra = 'programação';
function menciona(texto,palavra){
    return texto.indexOf(palavra)>=0;
}
console.log(menciona(texto,palavra));

// exercicio apenas o nome

let frase = "Olá, sou Carlos!";
let nomeUsuario = frase.slice(frase.indexOf("Carlos"),frase.indexOf("!"));

console.log(frase.indexOf("Carlos"));
console.log(frase.indexOf("!"));

console.log(nomeUsuario);

