// array
const arrayExemplo = ["gato", "cachorro", "Jacaré", "cachorro"];
console.log(arrayExemplo);

// insere item na última posição
console.log(arrayExemplo.push("macaco"));

// elimina o ultimo item do array
console.log(arrayExemplo.pop());

// remover o primeiro item do array
console.log(arrayExemplo.shift());

// inclui na primeira posição
console.log(arrayExemplo.unshift("cavalo"));

// coloca todos os itens de um array dentro de uma string
console.log(arrayExemplo.join(" / "));
console.log(arrayExemplo.join()); // quando não envia um parametro ele coloca virgula por padrão

//informa o indice de onde encontrou o primeiro item
console.log(arrayExemplo.indexOf("cachorro"));
console.log(arrayExemplo.indexOf("cachorr"));  // se não encontra nada coloca -1

//informa o indice de onde encontrou o ultimo item
console.log(arrayExemplo.lastIndexOf("cachorro"));

// informa o indice de onde encontrou o ultimo item
console.log(arrayExemplo.lastIndexOf("cachorro"));

//retorna um boolean informando se encontrou o parametro enviado
console.log(arrayExemplo.includes("cachorro"));  // true
console.log(arrayExemplo.includes("cachorro123"));  // false

// retorna um array modificado por nossas condições
console.log(arrayExemplo);
const itensArrayMap = arrayExemplo.map((item, index) => item + ' - ' + index)
console.log(itensArrayMap);


//retorna array modificado por condicoes
const arr = [1, 5, 7, 8, 9];
const itensArrayMap1 = arr.map(item => item * 3);
console.log(itensArrayMap1);


//retorna o primeiro elemento que encontrar
const itensArrayFind = arrayExemplo.find((item) => item === "cachorro")
console.log(itensArrayFind);

// retornan um unico valor
// reduce recebe dois parametros
const arrayteste = [3,5,6,7]
const itensArrayReduce = arrayteste.reduce((pilha, item) => {
    console.log("pilha");
    console.log(item)
    return pilha*item
});
console.log(itensArrayReduce);


//retorna um outro array
const itensArrayFilter = arrayExemplo.filter((item)=> item.length>4)
console.log(itensArrayFilter);

// passar dentro do array e dar o item
arrayExemplo.forEach((item)=> console.log("for each: "+item))

// diferenca do finder e do filter
// finder o primeiro elemento do array
// filter retorna todos os elementos condizentes com as condições

// for

for (const animal in arrayExemplo){
    console.log("for in:" + animal, arrayExemplo[animal])
}

for (const animal of arrayExemplo){
    console.log("for of :" + animal)
}



const arrayExemplo = [1, 3, 5, 12, 3, 4, 5, 7, 2, 3, 5, 3.4, 356, 2, 13, 2];

for (const resultado of arrayExemplo) {
    console.log("for of :" + resultado * 3);
}

for (const resultado1 of arrayExemplo) {
    if ((resultado1 % 2) = 0) {
        console.log("for 1 of :" + resultado1 * 3);
    }
}

const data = new Date()

console.log(data)
console.log(data.toISOString) // cria a data no formato iso
console.log(data.getDate()) // retorna o dia do mês
console.log(data.getMonth()) // mes comeca em 0, janeiro= 0
console.log(data.getDay()) // retorna o dia da semana, lembrando que segunda é o  dia 1
console.log(data.getFullYear()) // retorna o ano



const data1 = new Date('1941', '12', '01')

console.log(data1)
console.log(data1.toISOString) // cria a data no formato iso
console.log(data1.getDate()) // retorna o dia do mês
console.log(data1.getMonth()) // mes comeca em 0, janeiro= 0
console.log(data1.getDay()) // retorna o dia da semana, lembrando que segunda é o  dia 1
console.log(data1.getFullYear()) // retorna o ano


// desestruturação
// deixar o código mais conciso, cria uma variável com o valor da propriedade do objeto
// economiza linha de código e fica mais harmonico
// desestruturação dentro de array

const varGato = arrayExemplo[0];
console.log(varGato);

const [,varDog] = arrayExemplo;
console.log(varDog);

const [,nome1, , nome2] = arrayExemplo;
console.log(nome1, nome2);


// desestruturação utilizada dentro de objetos

const objPessoa = {
    nome: 'Rafael',
    idade: 54,
    sexo: 'masculino'
}

console.log(objPessoa);

const name = objPessoa.nome;

console.log(name);

const {nome, sexo: s} = objPessoa; // o : e o novo nome transforma a variavel sexo para s

console.log(name);
console.log(s); // mudou o nome de sexo por s na variavel

///

//exercicio
//Enunciado: Criar um array com  objetos que contenham nome e data de nascimento, após criar uma arrow function que faça primeiramente a desestruturação do array pela pessoa2 e depois desestruture o objeto para capturar o nome da pessoa.. Imprimir o nome da pessoa no console.

const arrayPessoas = []

const pessoa1 = {
    nome: 'Maria', 
    nascimento: new Date('1991 12 05')
}

const pessoa2 = {
    nome: 'Fátima', 
    nascimento: new Date('1989 02 23')
}

const pessoa3 = {
    nome: 'João', 
    nascimento: new Date('1971 12 20')
}

console.log(arrayPessoas);

arrayPessoas.push(pessoa1,pessoa2,pessoa3)

console.log(arrayPessoas);

const imprimeDesusturuturacao = () => {
    const [, pessoa2] = arrayPessoas
    console.log(pessoa2)
    
    const {nome} = pessoa2;
    console.log(nome)
}

imprimeDesusturuturacao()






