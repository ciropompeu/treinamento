// const arrayExemplo = ['gato','barcelona','Jacare', 'china']
// const varGato = arrayExemplo[1]

// let [animal1, , animal3] = arrayExemplo

// console.log(animal1)
// console.log(animal3)

//=====================================================================================

const objPessoa = {
    nome: 'Rafael',
    idade: 54,
    s: 'masculino'
}

const meuNome = objPessoa.nome;
// isso é igual isso aqui
cont {nome} = objPessoa;

// Dessa forma temos mais de linhas de código
const { nome, s: sexo } = objPessoa;

// Dessa forma temos mais de linhas de código
//const nome = objPessoa.nome
//const sexo = objPessoa.s

console.log(sexo)
console.log(objPessoa)