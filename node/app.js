// aula sobre npm
// utilizando um módulo nativo do node

const fs = require ("fs");

let dados = fs.readFileSync(__dirname+"/dados.txt", "utf8")
// esta função abre o arquivos e retorna o conteúdo do arquivo
// a tag __dirname já pega todo o caminho da pasta

console.log(dados);

// utilizando um módulo importado

// importar o módulo através do comando no terminal do vs studio
// npm install moment --save
// momentjs.com

let moment = require("moment");

let data = moment().format("MMM do YY");

console.log(data);

// criar um próprio módulo
// 1- criar uma pasta na raiz do projeto e dentra dela ficara o nosso módulo
// não vai ser nada além de um arquivo js

// 2 depois é exportar a variável que desaja compartilhar com o arquivo app.js
// no final do arquivo module.exports = nome-do-modulo
// para cada modulo que criamos é indispensavel criar ./ - isso indica ao node que é um modulo que esta dentro da pasta
 
const primeiroModulo = require("./primeiro-modulo");

// quando usa index.js dentro da pasta do modulo, não precisa discriminar no require
// se usar outro nome de arquivo, precisaria determinar no comando
// por exemplo: const modulo = require("./primeiro-modulo/nomedoarquivo.js")

console.log(primeiroModulo);


// como requisitar um módulo

let modulo = require("nomeModulo");
modulo.propriedade;
modulo.funcionalidade();

// por convenção, o nome da variável que armazena o módulo que estamos requerendo,
// geralmente recebe o mesmo nome do módulo, ou uma abreviação dele.

// módulo nativo

// para requerer um módulo nativo, usamos a função require() e passamos como
// argumento o nome do módulo que queremos requerer.

// neste link https://nodejs.org/api/
// vamos encontrar o módulos nativos quando instalamos o node

const fs = require("fs");

// módulo de terceiros

// para requerer um módulo de terceiros você deve primeiro instalálo usando o comando
// npm install PACKAGE --save
// uma vez instalado usamos a função require e passamos como argumento

const moment = require("moment");

// módulo criado

// Para requerer um módulo criado por nós, primeiro devemos criar um arquivo com extensão .js Dentro dele escrever o script que precisamos
// Uma vez definido nosso código, temos que deixá-lo acessível para podemos importar para nossa aplicação.
// Para isso temos de usar um objeto no ativo module e sua propriedade exports damos a ela o nome de variável que contém informação que queremos nos portar
// o arquivo index.js deve conter algo como

const series = [
    {titulo: "mad men", temporadas: 7},
    {titulo: "breaking bad", temporadas: 5},
    {titulo: "seinfield", temporadas: 9},
]

module.exports = series;

// e no app.js chamamos o módulo através do comando

const series = require("./series/index"); // não precisa escrever a extensão

