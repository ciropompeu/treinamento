const valores = [1, 2, 5, 23, 6, 6, 53, 34, 6, 4];


for (const numeros of valores) {
    console.log(numeros * 3)
}


for (const numeros of valores) {
    if (numeros % 2 == 0) {
        console.log(numeros * 3)
    }
}

