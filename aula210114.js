console.log ("aula 05");

/* aula anteriorgit 

uma das primeiras coisas que fazemos quando trabalhamos com git é a inicialização do repositório
git init

próximos passos
git config user.name
git config user.email


git add .
git add [nome do arquivo]

git commit -m "mensagem"

///// aula do professor leo, o rafael não vai mais dar aula

o ideal é não fazer alterações na branch MediaDeviceInfo
uma boa prática seria criar uma branch e trabalhar paralelamento com o arquivo


git checkout > fica trocando de branch
git checkout -b "[nome da branch]" > cria uma nova branch nova

git log --graph > para ver de forma gráfica o que foi feito

temos duas formas para apagar alterações feitas

git reset [nome do commit] > vai apagando histório até deixar no commit anterior (volta o histórico)
git revert [nome do commit] > vai criar mais um comit dizendo que apagou um comit anterior

as alterações no arquivo deixam de existir, mas mantem as alterações

git reset --soft [nome do commit] > para apagar a mensagem do git

o merge vai fazer a junção de arquivo da branch e arquivo do repositório local, jogando o resultado na branch main
o merge deve ser sempre na merge main, porque vai puxar o que foi feito para eval
o merge deve ser feito quando terminou de fazer o que precisa ser feito, não é comum ficar dando merge
git merge [nome da branch]

apagar branch secundária
tem que estar fora dela e dar o comando
git branch -D [nome da brabch]

git blame - comando para saber quem inseriu um novo codigo, e a linha de código que foi inserida

git lens > comando que dá super poder para o git

para apagar a pasta oculda .git (quando da git init na pasta errada)

cd ~ (vai para raiz)
rm -rf .git (vai apagar a pasta - rf "r" apagar a pasta "f" forçar)

quando da git log usa o comando q para sair
q (sair do git log)


git rebase [nome da branch]

rebase - junta as coisas do histórico da branch secundária na branch principal
porém ele vai mexer no histório da branch principal
ele vai colocar todas as alterações no final do histórico e não "onde" feito 

merge e rebase são similares

enquanto o merge cria novo comit com as alterações
o rebase pega os comits e leva para a main no histórico

o rebase é melhor em termos de organização, mas pode dar muito conflito
o recomendado é dar um git pull (atualizar a última versão que esta no main) para aí sim dar o rebase


git commit -am "mensagem" > da um add e faz commit tudo no mesmo
=======
<<<<<<< HEAD

console.log ("aula 05");

/* aula anteriorgit 

uma das primeiras coisas que fazemos quando trabalhamos com git é a inicialização do repositório
git init

próximos passos
git config user.name
git config user.email


git add .
git add [nome do arquivo]

git commit -m "mensagem"

///// aula do professor leo, o rafael não vai mais dar aula

o ideal é não fazer alterações na branch MediaDeviceInfo
uma boa prática seria criar uma branch e trabalhar paralelamento com o arquivo


git checkout > fica trocando de branch
git checkout -b "[nome da branch]" > cria uma nova branch nova

git log --graph > para ver de forma gráfica o que foi feito

temos duas formas para apagar alterações feitas

git reset [nome do commit] > vai apagando histório até deixar no commit anterior (volta o histórico)
git revert [nome do commit] > vai criar mais um comit dizendo que apagou um comit anterior

as alterações no arquivo deixam de existir, mas mantem as alterações

git reset --soft [nome do commit] > para apagar a mensagem do git

o merge vai fazer a junção de arquivo da branch e arquivo do repositório local, jogando o resultado na branch main
o merge deve ser sempre na merge main, porque vai puxar o que foi feito para eval
o merge deve ser feito quando terminou de fazer o que precisa ser feito, não é comum ficar dando merge
git merge [nome da branch]

apagar branch secundária
tem que estar fora dela e dar o comando
git branch -D [nome da brabch]

git blame - comando para saber quem inseriu um novo codigo, e a linha de código que foi inserida

git lens > comando que dá super poder para o git

para apagar a pasta oculda .git (quando da git init na pasta errada)

cd ~ (vai para raiz)
rm -rf .git (vai apagar a pasta - rf "r" apagar a pasta "f" forçar)

quando da git log usa o comando q para sair
q (sair do git log)


git rebase [nome da branch]

rebase - junta as coisas do histórico da branch secundária na branch principal
porém ele vai mexer no histório da branch principal
ele vai colocar todas as alterações no final do histórico e não "onde" feito 

merge e rebase são similares

enquanto o merge cria novo comit com as alterações
o rebase pega os comits e leva para a main no histórico

o rebase é melhor em termos de organização, mas pode dar muito conflito
o recomendado é dar um git pull (atualizar a última versão que esta no main) para aí sim dar o rebase


git commit -am "mensagem" > da um add e faz commit tudo no mesmo
=======

console.log ("aula 05");

/* aula anteriorgit 

uma das primeiras coisas que fazemos quando trabalhamos com git é a inicialização do repositório
git init

próximos passos
git config user.name
git config user.email


git add .
git add [nome do arquivo]

git commit -m "mensagem"

///// aula do professor leo, o rafael não vai mais dar aula

o ideal é não fazer alterações na branch MediaDeviceInfo
uma boa prática seria criar uma branch e trabalhar paralelamento com o arquivo


git checkout > fica trocando de branch
git checkout -b "[nome da branch]" > cria uma nova branch nova

git log --graph > para ver de forma gráfica o que foi feito

temos duas formas para apagar alterações feitas

git reset [nome do commit] > vai apagando histório até deixar no commit anterior (volta o histórico)
git revert [nome do commit] > vai criar mais um comit dizendo que apagou um comit anterior

as alterações no arquivo deixam de existir, mas mantem as alterações

git reset --soft [nome do commit] > para apagar a mensagem do git

o merge vai fazer a junção de arquivo da branch e arquivo do repositório local, jogando o resultado na branch main
o merge deve ser sempre na merge main, porque vai puxar o que foi feito para eval
o merge deve ser feito quando terminou de fazer o que precisa ser feito, não é comum ficar dando merge
git merge [nome da branch]

apagar branch secundária
tem que estar fora dela e dar o comando
git branch -D [nome da brabch]

git blame - comando para saber quem inseriu um novo codigo, e a linha de código que foi inserida

git lens > comando que dá super poder para o git

para apagar a pasta oculda .git (quando da git init na pasta errada)

cd ~ (vai para raiz)
rm -rf .git (vai apagar a pasta - rf "r" apagar a pasta "f" forçar)

quando da git log usa o comando q para sair
q (sair do git log)


git rebase [nome da branch]

rebase - junta as coisas do histórico da branch secundária na branch principal
porém ele vai mexer no histório da branch principal
ele vai colocar todas as alterações no final do histórico e não "onde" feito 

merge e rebase são similares

enquanto o merge cria novo comit com as alterações
o rebase pega os comits e leva para a main no histórico

o rebase é melhor em termos de organização, mas pode dar muito conflito
o recomendado é dar um git pull (atualizar a última versão que esta no main) para aí sim dar o rebase


git commit -am "mensagem" > da um add e faz commit tudo no mesmo
>>>>>>> a15a34189f2dad127703917b2e3425366bd55daa
>>>>>>> c64ad128cd5097789bf1c486a90df5e827326731
 */