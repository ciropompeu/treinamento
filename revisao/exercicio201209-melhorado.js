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