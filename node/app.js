//utilizando um módulo nativo do node

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
