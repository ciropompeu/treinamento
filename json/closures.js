//closure, função dentro de outra funcao
// a funcao pai executa a funcao filha

function saudacao(nome){
    let mensagem = "Olá seja bem vindo";
    
    function juntarNome(){
        return mensagem + " " + nome;
    }

    return juntarNome();

}

console.log(saudacao("Vinicius"));