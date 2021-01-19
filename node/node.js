console.log ("aula 01 - arquitetura cliente/servidor");

// arquitetura client-side
// cliente é o dispositivo que faz solicitações de determinados serviços e recursos para um servidor
// esse dispositivo pode ser de qualquer tipo, computador, tablet, televisão, etc

// nós como clientes, através da internet, acessamos um serviço de um servidor através de uma conexão da internet, utilizando um navegador chamado de browser

// request e response (pedido e resposta)
// quando acessamos um site estamos enviando um request para o servidor
// o servidor analisa e devolve um response, como uma página do site solicitado

// no servidor tem um webserver, que é o programa encarregado de processar as solicitações feitas pelos clientes
// gerar e enviar as respostas

// front-end - tudo o que o usuário ve
// back-end - tudo o que acontece no lado do servidor

// front-end - utiliza html, css, javascript
// back-end - utiliza php, java, c#, sql (informações dentro de um banco de dados), JSON e XML (para lidar com informações dentro de arquivos)

// com os avanços tecnologia, atualmente é possível executar javascript no lado do servidor
// essa é uma façada da plataforma chamada node.js


console.log ("aula 02 - introdução ao NodeJS");

// javascript foi criado e projetado para rodar diretamente no nosso navegador
// o nosso navegador tem a capacidade de ler o código escrito em JS e realizar o que foi solicitado

// node.js é um ambiente de execução de javascript baseado na plataforma V8
// inicialmente criado para ser o motor javascript do google chrome

// baixar o node em https://nodejs.org/

// para saber se tem o node baixado e qual a versão basta aplicar o comando
node -v