/*

Enunciado:
O sistema deve começar com um array contendo as seguintes strings:
001ç1234567891234çPedroç50000
001ç3245678865434çPauloç40000.99
002ç2345675434544345çJose da SilvaçRural
002ç2345675433444345çEduardo PereiraçRural
003ç10ç[1-10-100,2-30-2.50,3-40-3.10]çPedro
003ç08ç[1-34-10,2-33-1.50,3-40-0.10]çPaulo

Essas strings seguem o seguinte padrão:

Dados do vendedor
Os dados do vendedor possuem o identificador 001 e seguem o seguinte formato:
001çCPFçNameçSalary

Dados do cliente
Os dados do cliente possuem o identificador 002 e seguem o seguinte formato:
002çCNPJçNameçBusiness Area

Dados de venda
Os dados de venda possuem o identificador 003 e seguem o seguinte formato:
003çSale IDç[Item ID-Item Quantity-Item Price]çSalesman name

O sistema deve analisar todas essas informações e gerar um relatório de saída contendo as seguintes informações:
 - Quantidade de clientes
 - Quantidade de vendedores
 - Id da maior venda
 - O pior vendedor


*/

const colecao = [
    "001ç1234567891234çPedroç50000",
    "001ç3245678865434çPauloç40000.99",
    "002ç2345675434544345çJose da SilvaçRural",
    "002ç2345675433444345çEduardo PereiraçRural",
    "003ç10ç[1-10-100,2-30-2.50,3-40-3.10]çPedro",
    "003ç08ç[1-34-10,2-33-1.50,3-40-0.10]çPaulo"
]

// define as quantidades

let qVendedor = 0;
let qClientes = 0;
let qVendas = 0;
let indiceMaiorVenda = 0;
let isolaVendas = [];
let nomeVendedor = [];

const quantidades = arr => {

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i].slice(0, 3)) {
            case "001":
                qVendedor++;
                break;
            case "002":
                qClientes++;
                break;
            default:
                qVendas++;
                break;
        }

        // isola vendas
        if (arr[i].slice(0, 3) == "003") isolaVendas.push(arr[i].slice(arr[i].indexOf("["), arr[i].lastIndexOf("ç")));

    }

    console.log(qVendedor);
    console.log(qClientes)
    console.log(qVendas);
}

quantidades(colecao);
console.log(isolaVendas)

let isolaVendas1 = isolaVendas[1];
console.log(isolaVendas1)
