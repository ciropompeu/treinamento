

const data = new Date();
console.log("dia da semana que estamos (comeca no zero): "+data.getDay());
console.log("mes (começa no zero): "+data.getMonth());
console.log("ano: "+data.getFullYear());
console.log("dia: "+data.getDate());
console.log("dia da semana: "+data.getDay());
console.log(data.getHours()+"h"+data.getMinutes());

const novaData = new Date('1975,9,9');
console.log(novaData.getDay()); // terça-feira - 2


// exercicio

let data = new Date();
let setYear = data.getFullYear();
let setMonth = data.getMonth();
let setDate = data.getDate();