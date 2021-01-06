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

// para remover um remote
git remote rm <remote-name>
git remote rm origin

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

// é recomendável fazer um commit depois de uma série de alterações e funcionalidades importantes
// e também seja uma versão estável



// baixa arquivos do repositório remoto para o repositório local
git clone https://github.com/ciropompeu/treinamento.git // colocar a url do projeto

// o ls é uma outra forma de usar o dir no github
ls // mostra o que é diretório e o que é arquivo
ls -lha // mostra também as permissões e informações dos arquivos

//como manter os arquivos sincronizados
git pull origin master // não vai baixar os arquivos e apenas sincronizá-los ou atualizá-los



// branch - ramificação
// cópia alternativa até o momento

git branch bugfix45 // cria uma branch com nome bugfix
git checkout bugfix45 // começa a trabalhar a branch bugfix

git checkout -b bugfix // executa as duas funções citadas acima cria a branch e começa a trabalhar nela

git branch //lista as branches do repositório local
git branc -a // lista as branches do repositório logal e remoto


git log     // listar os históricos de commit
            // esse comando exibe nome do autor, data, hora da realização do commit e o código hash

// o head é uma referência ao estado atual do seu repositório
// é comum que esteja apontando para o último commit

git checkout bugfix45   // podemos utilizar o comango git checkout para mover o head do repositório para qualquer branch
git checkout a6de24     // podemos usar o chegou para mover a head para qualquer commit


/* para saber mais

conceitos de uso de branch
learngitbranching.js.org/?locate=pt_br

um guia ilustrado do comportamento do projeto usando gatinhos
girliemac.com/blog/2017/12/26/git-purr/

*/

// desfazendo mudanças

git checkout -- <nomedoarquivo> // para desfazer as mudanças que não foram adicionadas ao stage
git checkout HEAD -- <nomedoarquivo> // para desfazer as mudanças dos arquivos no stage, mas não commitadas

// git revert

git revert <HASH-DE-COMMIT-ANTERIOR> // cria um novo commit revertendo as alterações feitas até o commit especificado
git revert a6de24

// git reset --hard

git reset --hard <HASH-DE-COMMIT> // move o apontador da branch para um outro commit
git reset --hard 45e465


// unindo branches

git merge <OUTRA_BRANCH> // tenta criar um novo commit unindo a branch atual a uma outra branch
git merge bugfix45

// git rebase

git rebase <outra_branch> // emenda o branch atual sobre a outra branch
git rebase bugfix45


// conflitos
// as operações de união de branches podem provocar conflitos: ocorre quando o mesmo arquivo tem a mesma parte diferente nas duas branches

git merge bugfix45 // o git não cria o commit de unição, ao invés disso ele cra um arquivo mostrando o conflito entre as versões e sugerindo uma solução


git add arquivoDoConflito.js 



