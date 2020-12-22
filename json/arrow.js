// arrow functions

// elas sempre sao anonimas, para declará-lças somente através de variáveis

// const nome = () => {}

const ola = () => {
    console.log("ola");
}

ola();

// quando é apenas uma linha de codigo, não precisaria de chaves, basta colocar a linha depois da seta
// também não seria necessária a palavra return

const ola1 = () => console.log("ola1");

ola1();



// se tiver apenas 1 parametro, não precisa dos parenteses

const ola2 = valorOla => console.log('valor recebido: '+valorOla);

ola2('tete')

// para mais de um parametro os parenteses são obrigatorios
const ola3 = (valorA, valorB) => console.log(valorA+' e '+valorB);

ola3(10,20)

// se tiver mais de uma linha de codigo, são obrigatorios as chaves tambem
const ola4 = (valorA, valorB) => {
    console.log(valorA+' e '+valorB);
    return valorB + valorA;
}    

console.log(ola4(10,20));

// exemplos de codigos


const saudar = () => 'ola';
console.log('saudar: '+saudar());

const dobro = a => a*2;
console.log('dobro: '+dobro(25));

const somar = (a,b) => a+b;
console.log('somar: '+somar(2,132));

const horaAtual = () =>{
    let valor = new Date();
    return valor.getHours() + ":" + valor.getMinutes();
}
console.log('horaAtual: '+horaAtual());

// saudacao

const data = new Date();
const hora = data.getHours();
const horaCompleta = hora + "h" + data.getMinutes();

/*

números completo
const data = new Date();
const hora = ('0'+ data.getHours()).slice(-2);
const minutos = ('0'+ data.getMinutes()).slice(-2);
const horaCompleta = hora + "h" + minutos;

*/

const saudacao = () => {

    if (hora > 4 && hora < 12) {
        console.log("Bom dia, agora são: " + horaCompleta);
    } else if (hora > 12 && hora < 18) {
        console.log("Boa tarde, agora são: " + horaCompleta);
    } else {
        console.log("Boa noite, agora são: " + horaCompleta);
    }

}

saudacao();