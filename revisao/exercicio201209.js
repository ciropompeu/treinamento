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

const crianca = { comportadas: 125, valor: 12.5 };
const { comportadas, valor } = crianca;
const nome = "maPPin";
const total = (a, b) => { return JSON.stringify(Math.round(a * b)) }
const papaiNoel = { ...crianca, loja: nome.toUpperCase(), valorTotal: total(comportadas,valor) }
const final = JSON.stringify(papaiNoel);
setTimeout(papaiNoel,2000);

console.log(final)