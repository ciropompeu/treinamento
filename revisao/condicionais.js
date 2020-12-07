// condicional if

let dia = "sexta";

if (dia == "domingo") {
    console.log("vou à praia")
} else if (dia == "sexta") {
    console.log("vou ao cinema")
} else {
    console.log("fico em casa");
}

// como usar ou não o if

let nome = "Natalia";

function podePassar(nome) {

    if (nome == "Natalia") {
        return false;
    } else {
        return true;
    }
    //  a mesma coisa aconteceria se usasse apenas essa linha
    //  return nome != "Natalia";

}

console.log(podePassar(nome));




//  if ternario - escrito tudo na mesma linha

let dia11 = "domingo";
let resultado11 = dia11 == "domingo" ? "vou a praia" : "fico em casa";

console.log(resultado11);

// usando o switch

switch (dia11) {
    case "segunda":
        console.log("vou tomar cafe");
        break;
    case "terça":
        console.log("vou dormir");
        break;
    case "quarta":
        console.log("vou ao cinema");
        break;
    default:
        console.log("eu não vou fazer nada");

}


