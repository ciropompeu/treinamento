const letraMinuscula = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "w", "y", "z"];
const letraMaiuscula = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "W", "Y", "Z"]
const numeral = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const valorDigitado = "carita";
const senha = []
let resultado = "";

const separaSenha = valor => {
    for (const letra of valor) {
        senha.push(letra);
    }
    console.log(`senha: ${senha}`);
}
separaSenha(valorDigitado)


const descobreLetra = valor => {

    for (let i=0; i<5; i++) {

        if (letra === valor[i]) {
            console.log(`letra: ${letra}`)
            resultado = resultado + letra;
            console.log(`resultado: ${resultado}`);
            break
        } else {
            console.log(letra)
        }
    }
}


for (let i=0; i<5; i++){
    descobreLetra(senha);
}



