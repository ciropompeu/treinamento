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
