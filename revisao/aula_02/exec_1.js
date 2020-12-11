const stringParaModificar = 'caza'

const variavelObjeto = {
    nome: "Rafael",
    idade: 54,
    sexo: "masculino", 
    stringModificada: stringParaModificar.replace('z', 's')
};

const varObjToJson = JSON.stringify(variavelObjeto);
console.log(varObjToJson);