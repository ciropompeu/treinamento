// introducao ao git - software de contro de versões
// backup completo dos arquivos e compartilhar os mesmos com a equipe de colaboradores


// comandos

git init // cria o repositório
git config user.name "nomeUsuario" // define o usuário
git config user.email "emailUsuario" // define o email
git remote add origin http://...   // aponta o repositório como remoto
git add . // adiciona todas as modificações

// para configurar globalmente em todas as pastas
git config --global user.name "nomeUsuario"
git config --global user.email "emailUsuario"

git commit -m "mensagem" // comita(salva) as modificações feitas
git push origin master // envia as modificações ao repositório remoto

git --version // para ver se o git foi instalado corretamente e informa a versão do git instalada

/*  documentação

site oficial - git-scm.com
dev.to/t/git
oshitgit.com

*/

// github armazenamento na nuvem
// repositório, um lugar onde os arquivos de projetos serão armazenados e serão armazenados
// 1 projeto corresponde a 1 repositório
// repositório no github é o repositório remoto
// repositorio na máquina é o repositório local

//link entre os repositórios (local e remoto)
git remote add origin https://github.com/ciropompeu/treinamento.git // colar o endereço do repositório remoto
git remote -v   // para verificar se o link foi criado corretamente
                // fetch de onde vai trazer as informações
                // push para onde vou enviar as informações

// adicionar arquivos
// commit pequeno histórico com data hora e assinatura do autor

//um por um

git add "nome-do-arquivo"
git status

//todos os arquivos
git add .
git status

// commit 
// confirmação de que informamos ao repositório que os arquivos que estamos adicionando sejam
// um pequeno pacote de adições ou modificações que terão uma marca definitiva em um determinado
// periodo de tempo e serão assinados por um autor


// adicionar o commit
git commit -m "texto de commit"

// adicionar alterações de arquivos já existentes

// para o git o repositório remoto é chamado de origin
// a branch principal é chamado de master

// enviar os arquivos para o repositório
git push origin master 


// antes de fazer o push precisa do git add e de um git com o commit


