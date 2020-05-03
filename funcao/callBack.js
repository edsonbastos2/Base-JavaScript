const notas = [5.5,6.7,4.3,7.7,8.9,9.8]

const notasBaixa1 = []
//  Exemplo sem callback
for(let i in notas){
    if(notas[i] < 7){
        notasBaixa1.push(notas[i])
    }
}

console.log(notasBaixa1)

// Exemplo com callback
const notasBaixa2 = notas.filter( nota => nota < 7)

console.log(notasBaixa2)