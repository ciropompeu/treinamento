// for                  IN      OF
// uso com objetos      X       -
// uso com matrizes     -       X
// uso com strings      -       X

//for in

let carro = {
    nome: "fox",
    ano: "2011"
}

for(let propriedade in carro){
    console.log("propriedade: "+propriedade);

    // se quiser especificar o valor precisa colocar de onde está tirando, colocando a propriedade no colchete
    console.log("valor da propriedade: "+carro[propriedade]);

    console.log(propriedade, carro[propriedade]);
}

//for of - agilizar o processo de interação e não precisar criar loop para interagir com array

let series = ["friends", "game of thrones", "breaking bad"]

for (let valor of series){
    console.log(valor)
}

//exercicio forin

let bart = {
    mae: "Marge",
    pai: "Homer",
    hobbie: "Skate",
    corCamiseta: "Laranja"
}

for (let dados in bart){
    console.log(dados, bart[dados])
}

// exercicio forof
// imprimir a frase na vertical

let frase = "Essa semana vou no colearning";

for (let letra of frase){
    console.log(letra);
}