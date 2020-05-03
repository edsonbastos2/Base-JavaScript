function Carro(velocidadeMaxima = 200, delta = 5){
    // Atributo privado
    let velocidadeAtual=0

    // Metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta < velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Metodo publico
    this.getVelocidade = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidade())
const ferrai = new Carro(320, 20)
ferrai.acelerar()
ferrai.acelerar()
ferrai.acelerar()
console.log(ferrai.getVelocidade())