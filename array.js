// array, matriz ou vetor
// permite que pode agrupar vários tipos de dados em uma única variável
// array nos permite gerar uma coleção de dados ordenados
// indice éa posição do elemento dentro do array
// elemento é o dado contido no array

let menininho = ["vinicius", 22, 1.8, true, ["musica", "cafe"]];
console.log(menininho[0])
console.log(menininho[4])
console.log(menininho.length)

// exercicios

//marca de carros

let marcasDeAutos = ["Mustang", "Ferrari", "Ford", "Chevrolet"]
console.log(marcasDeAutos[2]);




//metodos de array

// metodos - manipular os dados presentes nos arrays
// push - adicionar determinado dados como último elemento do array

let cores = ["azul","vermelho","verde","amarelo"];
console.log(cores);
cores.push("violeta","rosa");
console.log(cores);

// pop - não recebe parametro e sempre retira o ultimo elemento do array
// ele també
let ultimaCor = cores.pop();
console.log(cores);
console.log(ultimaCor);

// shift - remove o elemento no indice 0 (igual o pop);

let primeiraCor = cores.shift();
console.log(cores);
console.log(primeiraCor);

// unshift - insere um ou mais dados no inicio do array

console.log(cores);
cores.unshift(primeiraCor, ultimaCor)
console.log(cores);




// outros exemplos
let pessoa = ["vinicius", 1.80, "vinicius"];
console.log(pessoa);

//push
pessoa.push(22);
console.log(pessoa);

//pop
let excluido = pessoa.pop();
console.log(excluido);
console.log(pessoa);

//unshift
pessoa.unshift(excluido);
console.log(pessoa);

//shift
pessoa.shift();
console.log(pessoa);


// indexOf();
// executado sobre um array e recebe como parametro uma string de texto
// comeca a procurar o dado do inicio para o fim
// se o dado que estou procurando não estiver no array retorna -1

// lastIndexOf();
// igual o indexof, porém comeca a procurar do fim para o começo

// join();
// permite unificar todos os elementos do array em uma única string
// separando os elementos por vírgula
// pode usar outro elemento para delimitar, porém tem que determinar

// includes();
// similar ao indexOf
// recebe um item para pesquisar no array
// retorna verdadeiro se encontrou
// retorna falso se não encontrou


//indexOf
console.log(pessoa.indexOf(1.80));
console.log(pessoa.indexOf("vinIcius")); // dado inexistente
console.log(pessoa.indexOf("vinicius"));

//lastIndexOf
console.log(pessoa.indexOf("vinicius"));
console.log(pessoa.lastIndexOf("vinicius"));

//join - vai transformar array dentro de uma string
console.log(pessoa.join());
console.log(pessoa.join("-"));
console.log(pessoa.join("-teste-"));

// includes
let frutas = ["maca", "pera", "morango"];
console.log(frutas.includes("morango"));
console.log(frutas.includes("chinelo"));

// exercicios indexOf

let alunos = ["João", "Pedro", "Jorge", "Francisco"];

let indiceJoao = alunos.indexOf("João");
let indiceFrancisco = alunos.indexOf("Francisco");

console.log(indiceJoao);
console.log(indiceFrancisco);

// exercicio Join


let arrayFrase = [
    "Não",
    "fracassei,",
    "simplesmente",
    "encontrei",
    "dez",
    "mil",
    "soluções",
    "equivocadas"
]

let fraseNova = arrayFrase.join(" ");
console.log(fraseNova);

// exercicio pop

let estudantes1 = [
    {
        nome: "Álvaro",
        media: 9,
        curso: "Android"
    },
    {
        nome: "Daniel",
        media: 6,
        curso: "Full Stack"
    },
    {
        nome: "Alexis",
        media: 3,
        curso: "iOS"
    }
];

let alunoFormado = estudantes1.pop();

console.log(alunoFormado);

// exercicio push

let estudantes = [
    {
        nome: 'Álvaro',
        media: 9,
        curso: 'Android',
    },
    {
        nome: 'Daniel',
        media: 6,
        curso: 'Full Stack',
    }
]

let aluno1 = {
    nome: "João",
    media: 5,
    curso: "iOS"
}

let aluno2 = {
    nome: "Miguel",
    media: 2,
    curso: "Android"
}
console.log(estudantes)
estudantes.push(aluno1, aluno2);
console.log(estudantes)


















