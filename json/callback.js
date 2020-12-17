// callback
// passar uma função como parâmetro

// métodos map, filter, reduce 

// um calll bacj é uma função que se passa como parâmetro para outra função.
// a função que recebe é que se encarrega de executá-lo quando seja necessário

setTimeout (function(){
    console.log('Hola Mundo!');
}, 1000)

let meuCallback = () => console.log('ólá mundo');
setTimeout(meuCallback, 1000);