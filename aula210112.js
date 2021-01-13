/* 

git - gerenciamento de repositório
existe repositório local (máquina) e repositório remoto (nuvem)

mkdir - criar pasta no prompt
pwd - mostra a pasta que está
cd - entrar em um diretório
ls - listar 
ls -a - mostra tudo inclusive os ocultos

git log - vai mostrar o log
git status - vai mostrar o status

git add [nome do arquivo] - vai adicionar ao git
git add . - adiciona todos os diretórios de uma vez

git remote -v - mostrar o repositório
git remote add origin [endereço git] - adicionando repositório remoto

git config user.name "nome do usuário" - configurar nome do usuário
gif config --global user.name "nome do usuário" - configurar em todos os diretórios de forma global

git config user.email "email" - configurar email
gif config --global user.email "email" - configurar em todos os diretórios de forma global

git clone [URL git] - é quando baixamos do repositório remoto para o repositório local

git pull - baixa os arquivos do repositório remoto

.gitignore - fazer com que o git ignore e não monitore os arquivos


git checkout [nome da branch existente] - muda de uma branch para outra



// deploy é quando mandamos a branch do repositório para o servidor

// quando está trabalhando em time usa uma branch para cada desenvolvedor e uma de homologação em development
// branch é uma outra versão do código para que possa mexer sem interferir o que está produzido
// repositórios antigos eram usados "master", hoje em dia é usado "main"
// main é a versão mais estável do projeto, é o que geralmente estava em produção

git branch - mostra as branchs criadas
git checkout [nome da nova branch] - cria branch nova 
git checkout -b [nome da nova branch] - cria branch nova e "-b" manda os arquivos

//git semantics - padrões de mensagens para commit

quando vai adicionar nova feature
"feat/"

quando vai fazer uma correção
"fix/"

quando vai adicionar uma nova features de um card
"feat/card123"

incluir mensagem que faça sentido
"feature/card123/ cadastro funcionario ok"

*/