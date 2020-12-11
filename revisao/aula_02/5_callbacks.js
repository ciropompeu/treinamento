const calcularValorTotalColocaoPisoProfissional = (valor, metros) => valor * metros;
const calcularValorDoMetroDoProfissional = (valorTotal, metros) => valorTotal / metros;

const realizaCalculos = (numeroUm, numeroDois, calculo) => calculo(numeroUm, numeroDois)
console.log(realizaCalculos(15, 3, calcularValorTotalColocaoPisoProfissional))
console.log(realizaCalculos(45, 3, calcularValorDoMetroDoProfissional))

// Mostrar que existem funções nativas do JS que utilizam CallBacks
const espera = setTimeout(() => console.log('Aguardei até o final'), 1000)