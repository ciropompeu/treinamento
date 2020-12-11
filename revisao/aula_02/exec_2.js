const converteParametro = (parametro) => {
    console.log(`O tipo de parâmetro é: ${typeof(parametro)}`)
    const parametroConvertido = parseInt(parametro);
    console.log(`O novo tipo do parâmetro é: ${typeof(parametroConvertido)}`)
    console.log(`O parâmetro convertido é: ${parametroConvertido}`)
}

converteParametro("34")