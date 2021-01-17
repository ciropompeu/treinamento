/*

Enunciado:
O Papai Noel necessita calcular quanto vai precisar em R$ para comprar os presentes para as crianças que tiveram um bom comportamento na cidade de São Paulo e retornar um JSON com as seguintes informações:
 * Número total de crianças comportadas
 * Valor unitário do presente
 * Valor total gasto com presentes
 * Nome da loja onde o Papai Noel encontrou presentes com valor mais em conta
Entradas (Valores que você precisa definir):
* qtd de crianças comportadas
* valor individual do presente
Regras:
* É necessário que o nome da loja esteja escrito com letras maiúsculas (usar um método de string para isso)
* O Valor total dos presentes deve estar truncado (No caso do total ser 1343,43 o mesmo deve se tornar 1343) através de uma conversão de tipos.
* O Valor total deve ser calculado em uma arrow function que vai receber dois parâmetros e retornar o JSON de saída da aplicação.
* A função criada anteriormente deve ser enviada como parâmetro para a função nativa do javascript 'setTimeout' com intervalo de 2 segundos.
Dicas:
* Trate os dados de entradas dentro de um objeto. ex:{nrCriancas: 25, valorUnt: 30.00}
* Quando tiver o valor total, inclua ele dentro desse objeto
* Use um método JSON.stringify para converter esse objeto para JSON
* Pesquise no google por 'javascript settimeout w3schools' (Caso não encontrem ou tenham duvidas me chamem)
* Iniciem fazendo a funcionalidade basica que é calcular o valor total, depois que isso estiver ok, vão incrementando com os outros itens.

*/

const criancas = [
    { nome: "tobias", comportada: true, presente: 12, loja: "americanas" },
    { nome: "agnaldo", comportada: true, presente: 24.15, loja: "submarino" },
    { nome: "adilson", comportada: false, presente: 37.5, loja: "shoptime" },
    { nome: "joana", comportada: false, presente: 33.10, loja: "magazine luiza" },
    { nome: "creta", comportada: true, presente: 5.5, loja: "mercadinho dragão dourado" },
    { nome: "leandra", comportada: false, presente: 27.35, loja: "bar do zé" },
]

let criancaComportada = 0;
let lojaMaisBarata = "";
let valorUnitario = 0;
let resultado = {};

// entendendo o reduce
// let cri = [1, 2, 3, 4, 5]
// let valorCri = cri.reduce((acc, item) => { console.log(item)
// return acc + item }, 0);
const valorTotal = Math.round(criancas.reduce((contador, item) => { return contador + item.presente }, 0));


const verificaComportadas = (arr, valor) => {

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i][valor]) criancaComportada++;
    // }

    // fazer o "for" acima com "for of"

    for (const pessoas of arr) {
        if (pessoas[valor]) criancaComportada++;
    }

    return criancaComportada;

}

const verificaLoja = (arr, valor, dep) => {

    valorUnitario = arr[0][valor];

    for (const barato of arr) {
        if (valorUnitario > barato[valor]) {
            valorUnitario = barato[valor];
            lojaMaisBarata = barato[dep];
        }
    }

}

verificaComportadas(criancas, "comportada");
verificaLoja(criancas, "presente", "loja");

const montaObjeto = (obj) => {

    Object.assign(obj, { criancas: criancaComportada });
    Object.assign(obj, { presente: valorUnitario });
    Object.assign(obj, { total: valorTotal });
    Object.assign(obj, { loja: lojaMaisBarata });

    return JSON.stringify(obj)

}

// settimeout (funcao,tempo,parametro-da-funcao)
setTimeout(console.log, 2000, montaObjeto(resultado))

// console.log(`crianças comportadas: ${criancaComportada}`);
// console.log(`presente mais barato: ${valorUnitario}`);
// console.log(`valor total: ${valorTotal}`);
// console.log(`loja mais em conta: ${lojaMaisBarata}`);