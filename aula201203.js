console.log("aula 1");
//codigo desenvolvido em aula com o professor rafael


const numeroAulasTotal = 49;
let porcentagemFaltas = null;
let alunoAprovado = true;
let statusAluno = "";
let arrayAlunos = [];

const alunoRafael = {
	nome: "Rafael",
	qtdFaltas: 7
};

const alunaJu = {
	nome: "Ju",
	qtdFaltas: 4
};

arrayAlunos.push(alunoRafael);
arrayAlunos.push(alunaJu);

for (let i = 0; i < arrayAlunos.length; i++) {
	porcentagemFaltas = calculaPorcentagem(
		arrayAlunos[i].qtdFaltas,
		numeroAulasTotal
	);

	if (porcentagemFaltas <= 10) {
		statusAluno = "Aprovados";
	} else if (porcentagemFaltas > 10 && porcentagemFaltas <= 15) {
		statusAluno = "Necessário realizar prova";
	} else {
		statusAluno = "Reprovado";
	}

	arrayAlunos[i].status = statusAluno;
	arrayAlunos[i].porcentagemFaltas = porcentagemFaltas;

	console.log(arrayAlunos[i]);
}

function calculaPorcentagem(_qtdFaltas, _numeroAulasTotal) {
	porcentagemFaltas = (_qtdFaltas / _numeroAulasTotal) * 100;
	return porcentagemFaltas;
}

// switch(statusAluno){
//   case ('Aprovado'):
//       alunoAprovado = true;
//     break;

//   case ('Necessário realizar prova'):
//       alunoAprovado = false;
//     break;

//   case ('Reprovado'):
//       alunoAprovado = false;
//     break;

//   default:
//       alunoAprovado = false;
// }



// codigo desenvolvido em aula com a professora julia

// function presencaDoAluno(status = "atrasado") {
//   switch(status) {
//     case "presente":
//       return 'Aluno compareceu na aula';
//       break;
//     case "atrasado":
//       return 'Aluno chegou atrasado, mas assistiu a aula';
//       break;
//     default:
//       return 'Aluno não veio na aula';
//       break;
//   }
// }

function presencaDoAluno(status) {
  const mensagem = {
    presente: "Aluno compareceu na aula",
    atrasado: "Aluno chegou atrasado, mas assistiu a aula",
    faltou: "Aluno não veio na aula"
  };

  return mensagem[status] || mensagem["faltou"];
}

console.log(presencaDoAluno("presente"));
