// destructuring
// desestruturação ou alocação por desestruturação

// não modifica nem altera o array de origem

// extrair dados de array ou objetos literais




let pessoa = {
    nome: "vinicius",
    altura: 1.80,
}

// uma opcao seria let nome = pessoa.nome;

const {nome, altura} = pessoa;

console.log(nome);
console.log(altura);

let listaCompras = ["pão", "leite", "açúcar"];

const [item1, item2, item3] = listaCompras;

console.log(item1);
console.log(item2);
console.log(item3);

//// exercício destructruring

let destinosIncriveis = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [,item1,,item2]= destinosIncriveis;
console.log(item1);
console.log(item2);

