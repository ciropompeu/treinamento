const variavelObjeto = {
    nome: "Rafael",
    idade: 54,
    sexo: "masculino"
};

const variavelJson = '{"curso":"js_full_stack", "aulas":49, "turma": 16}';

// JSON.stringify realiza a conversão de objeto para JSON
const varObjToJson = JSON.stringify(variavelObjeto);
console.log(varObjToJson);

// JSON.parse realiza a conversão de JSON para objeto
const varJsonToObj = JSON.parse(variavelJson);
console.log(varJsonToObj);