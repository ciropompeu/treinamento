const movimentacaoBancaria = [2500, -300, 400, -200, -80, -75, 250, -180, -390, -960, -240]

const saldo = movimentacaoBancaria.reduce((acumulador, valor) => {
  // if (valor > 0) {
  //   acumulador.entradas += valor
  // } else {
  //   acumulador.saidas += valor
  // }

  valor > 0 ? acumulador.entradas += valor : acumulador.saidas += valor
  acumulador.saldo = acumulador.entradas + acumulador.saidas
  return acumulador
}, { saldo: 0, entradas: 0, saidas: 0 })

console.log(saldo)

const {saldo: total, ...acumulado } = saldo
console.log(acumulado.saidas)