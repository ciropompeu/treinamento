function realizarCalculos(valorUm, ValorDois){
    function somar(){
        console.log(`O retorno da função soma é ${valorUm + ValorDois}`)
        return valorUm + ValorDois
    }

    function subtrair(){
        console.log(`O retorno da função subtrair é ${valorUm - ValorDois}`)
        return valorUm - ValorDois
    }

    function dividir(){
        console.log(`O retorno da função dividir é ${valorUm / ValorDois}`)
        return valorUm / ValorDois
    }

    function multiplicar(){
        console.log(`O retorno da função multiplicar é ${valorUm * ValorDois}`)
        console.log('')
        return valorUm * ValorDois
    }

    function somarTodosResultados(){
        return somar() + subtrair() + dividir() + multiplicar()
    }

    console.log(`A soma de todos os resultados é: ${somarTodosResultados()}`)
}

realizarCalculos(10, 2)