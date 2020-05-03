const carros = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome,indice){
    console.log(`${indice+1}-${nome}`)
}

carros.forEach(imprimir)
console.log('-----------------------------')
carros.forEach( (carro) => console.log(carro))