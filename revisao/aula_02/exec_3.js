function calculaTriplo(valor){
    function multiplica(){
        return valor * 3
    }

    const ret = multiplica()
    return ret
}

const triplo = (valor, callback) => callback(valor)

console.log(triplo(30, calculaTriplo))


