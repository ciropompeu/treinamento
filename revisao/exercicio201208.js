const nomeCidade = "Barra do Ribeiro";
const numeroAulasTotal = 49;
const qtdFaltas = 4;
const nomeAluno = "Rafael";
let porcentagemFaltas = null;
let alunoAprovado = true;
let statusAluno = '';

const arrayAlunos = [];

const alunoRafael = {
  nome: 'Rafael',
  qtdFaltas: 7
  
};

const alunaJu = {
  nome: 'Ju',
  qtdFaltas: 4
  
};

arrayAlunos.push(alunoRafael);
arrayAlunos.push(alunaJu);

console.log(arrayAlunos.Lenght);

function calculaPorcentagem(_qtdFaltas, _numeroAulasTotal){
  porcentagemFaltas = (_qtdFaltas / _numeroAulasTotal)*100;
  console.log(porcentagemFaltas);
  return porcentagemFaltas;
}

porcentagemFaltas = calculaPorcentagem(qtdFaltas, numeroAulasTotal);

if (porcentagemFaltas <= 10){
  alunoAprovado = 'aprovado';
} else if (porcentagemFaltas > 10 && porcentagemFaltas <=15){
  alunoAprovado = 'necessário realizar prova';
} else {
  alunoAprovado = 'reprovado';
}


switch (porcentagemFaltas){
    
  case ('aprovado'):
    alunoAprovado = ture;
    break;
  
  case ('necessário realizar prova'):
    alunoAprovado = false;
    break;

  case ('reprovado'):
    alunoAprovado = false;
    break;

  default:
    alunoAprovado = false;
    
}

console.log(alunoAprovado);



