function presencaDoAluno(status ="sai para lá"){
    const mensagem = {
        presente: "aluno compareceu na aula",
        atrasado: "aluno chegou atrasado",
        faltou: "aluno não veio na aula"
    }
    return mensagem[status]
}

console.log(presencaDoAluno("presente"))


/*

outra possibilidade seria

function presencaDoAluno(status){
    const mensagem = {
        presente: "aluno compareceu na aula",
        atrasado: "aluno chegou atrasado",
        faltou: "aluno não veio na aula"
    }
    return mensagem[status] || "sai pra lá"
}

console.log(presencaDoAluno("presente"))

*/