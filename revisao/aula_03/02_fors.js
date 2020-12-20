const arrayExemplo = ['gato','pato','Jacaré', 'cachorro']

for (const animal in arrayExemplo){
    console.log(animal, arrayExemplo[animal])
}

for (const animal of arrayExemplo){
    console.log(animal)
}