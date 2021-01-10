/*

Enunciado:
Desenvolver uma aplicação  que ajude uma sorveteria a identificar de forma fácil como foram as vendas de um determinado dia, no final retorne um relatório no formato json (no console) com as seguintes informações:
* O nome da pessoa que fez o pedido de maior valor, qual o valor desse pedido e o que foi o item do pedido.
* O nome da pessoa que fez o pedido de menor valor, qual o valor desse pedido e o que foi o item do pedido.
* O número total de pedidos do dia.
* O valor médio de cada pedido.
Dicas:
-Utilize variáveis  temporárias para armazenar menor e maior valor.
Plus:
-Garanta que vai haver um padrão de nomes nesse report
-Certifique-se de que vai estar tratando 'número como número '
-Utilize callbacks
-Utize desestruturação
Entradas:
O sistema deve começar com um array contendo objetos do tipo pedidos.
O objeto do tipo pedidos deve ter:
* nome da pessoa
* valor do pedido
* item comprado
* data do pedido
Entrega:
A entrega desse desafio deve ser feita através de um repositório no github. (editado) 
*/

// lista de pedidos

const pedidos = [
    {
        nome: "antonio",
        valor: 10,
        item: "1 bola",
        data: 08/01/2021
    },
    {
        nome: "beatriz",
        valor: 20,
        item: "2 bolas",
        data: 08 / 01 / 2021
    },
    {
        nome: "carmen",
        valor: 30,
        item: "3 bolas",
        data: 08 / 01 / 2021
    },
    {
        nome: "danilo",
        valor: 50,
        item: "sundae",
        data: 08 / 01 / 2021
    }
]


const relatorio = [];

// descobrindo o maior pedido

const maiorPedido = (arr) => {
    let numero = arr[0].valor;
    let indiceMaior = 0;

    for (let i = 0; i < arr.length; i++) {
        if (numero < arr[i].valor) {
            indiceMaior = i;
        }
    }

    return indiceMaior;
}

// descibrindo o menor pedido

const menorPedido = (arr) => {
    let numero = arr[0].valor;
    let indiceMenor = 0;
    for (let i = 0; i < arr.length; i++) {
        if (numero > arr[i].valor) {
            indiceMenor = i;
        }
    }

    return indiceMenor;
}


// descobrindo o número de pedidos

const numeroPedidos = arr => arr.length;

// descobrindo o valor medio de todos os pedidos

const valorMedio = arr =>{
    
    let media = 0;
    for (let i = 0; i < arr.length; i++) {
        media += arr[i].valor;
    }

    return media/arr.length;
}

// montando um relatorio com os dados descobertos
// conforme enunciado retornando em JSON

const montagem = arr => {

    const maiorValorRelatorio = arr[maiorPedido(arr)];
    delete maiorValorRelatorio.data;

    const menorValorRelatorio = arr[menorPedido(arr)];
    delete menorValorRelatorio.data;

    relatorio.push(maiorValorRelatorio);
    relatorio.push(menorValorRelatorio);
    relatorio.push(numeroPedidos(arr));
    relatorio.push(valorMedio(arr));

    return JSON.stringify(relatorio)
}

// imprimindo na tela o resultado

console.log(montagem(pedidos));