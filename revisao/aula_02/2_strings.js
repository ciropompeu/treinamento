const stringExemplo = 'Essa é nossa string modelo!        ';

console.log('MÉTODO LENGTH=======================================================================================');
// Lembrar que o Length é utilizado em arrays, pois string são arrays de caracteres.
console.log(`Esse é o método length, ele é responsável por retornar o número de caracteres, exemplo, o lenght da nossa stringExemplo é: ${stringExemplo.length}`);
// const arrayTeste = ['Teste1', 'teste2', 'teste3'];
// console.log(arrayTeste[0])
// console.log(arrayTeste[0][2])
console.log('===================================================================================================================================================================');
console.log('')
console.log('MÉTODO indexOf=======================================================================================');

console.log(`O método indexOf é responsável por procurar uma parte string dentro da nossa string e devolver a posição que inicia o que procuramos. 
EX: A palavra "nossa" começa na posição: ${stringExemplo.indexOf('nossa')}`);

console.log('===================================================================================================================================================================');
console.log('')
console.log('MÉTODO SLICE========================================================================================');

console.log(`O método slice retorna uma parte de uma string, para isso recebe um parâmetro de inicio e fim(não obrigatório). Ex: para encontrar a palavra "nossa", devo procurar pelas posições
7 e 12. ${stringExemplo.slice(7, 12)}` );

console.log('===================================================================================================================================================================');
console.log('')
console.log('MÉTODO TRIM=========================================================================================');

console.log(`O método trim remove espaços em branco de uma string, ex: a stingExemplo não vai printar o esço no final. Veja pela propriedade lenght: Sem trim => ${stringExemplo.length}
com trim ${stringExemplo.trim().length}` );

console.log('===================================================================================================================================================================');
console.log('')
console.log('MÉTODO SPLIT========================================================================================');

console.log(`O método splite divide uma string a partir do caracter enviado no parâmetro. Veja o retorno do comando "stringModelo.split(" "): ${stringExemplo.trim().split(" ")}` );
console.log('===================================================================================================================================================================');
console.log('')
console.log('MÉTODO REPLACE=======================================================================================');

console.log(`O método replace tem por funcionalidade substituir uma string por outra, tendo como primeiro parâmetro a string que será substituída e o segundo parâmetro a nova string.
veja a saída para o comando "stringExemplo.replace("string", "numero"): ${stringExemplo.replace("string", "numero")}` );
console.log('===================================================================================================================================================================');
console.log('')

//BONUS
console.log(`Para upper case usar: ${stringExemplo.toUpperCase()} `)
console.log(`Para lower case usar: ${stringExemplo.toLowerCase()} `)
